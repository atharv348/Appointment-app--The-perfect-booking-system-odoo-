import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api, type Customer } from "@/api/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus, Pencil, Trash2, Search, Mail, Phone, Users, Box, BadgeCheck } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/app/customers")({ component: UserResources });

function UserResources() {
  const qc = useQueryClient();
  const { data: customers = [] } = useQuery({ queryKey: ["customers"], queryFn: api.listCustomers });
  const { data: services = [] } = useQuery({ queryKey: ["services"], queryFn: api.listServices });
  
  const [editing, setEditing] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("providers");
  
  const blank = { name: "", email: "", phone: "", type: "provider", capacity: 1, assigned_services: [] };
  const [form, setForm] = useState<any>(blank);

  const save = useMutation({
    mutationFn: () => {
      const data = { ...form, notes: JSON.stringify({ type: form.type, capacity: form.capacity, assigned_services: form.assigned_services }) };
      return editing ? api.updateCustomer(editing.id, data) : api.createCustomer(data);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["customers"] });
      toast.success(editing ? "Updated" : "Created");
      setOpen(false); setEditing(null); setForm(blank);
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const del = useMutation({
    mutationFn: (id: string) => api.deleteCustomer(id),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["customers"] }); toast.success("Deleted"); },
  });

  const edit = (c: any) => { 
    let extra = { type: "provider", capacity: 1, assigned_services: [] };
    try {
      if (c.notes) extra = JSON.parse(c.notes);
    } catch (e) {}
    setEditing(c); 
    setForm({ ...c, ...extra }); 
    setOpen(true); 
  };

  const filtered = customers.filter((c) => {
    let type = "provider";
    try { if (c.notes) type = JSON.parse(c.notes).type; } catch (e) {}
    
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchesTab = (tab === "providers" && type === "provider") || (tab === "resources" && type === "resource");
    
    return matchesSearch && matchesTab;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users & Resources</h1>
          <p className="text-sm text-muted-foreground">Manage service providers and physical assets.</p>
        </div>
        <div className="flex gap-2">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search…" className="pl-9" />
          </div>
          <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) { setEditing(null); setForm(blank); } }}>
            <DialogTrigger asChild>
              <Button><Plus className="mr-1 h-4 w-4" /> Add New</Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader><DialogTitle>{editing ? "Edit" : "Add"} {form.type === "provider" ? "Provider" : "Resource"}</DialogTitle></DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label>Type</Label>
                  <Select value={form.type} onValueChange={(v) => setForm({ ...form, type: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="provider">Service Provider (Staff)</SelectItem>
                      <SelectItem value="resource">Resource (Room, Court, etc.)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2"><Label>Name</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={form.type === "provider" ? "Full Name" : "Resource Name"} /></div>
                
                {form.type === "provider" ? (
                  <>
                    <div className="space-y-2"><Label>Email</Label><Input type="email" value={form.email ?? ""} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Phone</Label><Input value={form.phone ?? ""} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
                  </>
                ) : (
                  <div className="space-y-2"><Label>Capacity</Label><Input type="number" value={form.capacity} onChange={(e) => setForm({ ...form, capacity: Number(e.target.value) })} /></div>
                )}

                <div className="space-y-2">
                  <Label>Assign to Appointments</Label>
                  <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto border rounded-md p-2">
                    {services.map(s => (
                      <div key={s.id} className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          id={s.id}
                          checked={form.assigned_services?.includes(s.id)}
                          onChange={(e) => {
                            const services = form.assigned_services || [];
                            if (e.target.checked) setForm({ ...form, assigned_services: [...services, s.id] });
                            else setForm({ ...form, assigned_services: services.filter((id: string) => id !== s.id) });
                          }}
                        />
                        <label htmlFor={s.id} className="text-xs truncate cursor-pointer">{s.name}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <DialogFooter className="mt-6">
                <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => save.mutate()} disabled={!form.name || save.isPending}>Save {form.type === "provider" ? "Provider" : "Resource"}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
          <TabsTrigger value="providers"><Users className="h-4 w-4 mr-2" /> Providers</TabsTrigger>
          <TabsTrigger value="resources"><Box className="h-4 w-4 mr-2" /> Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="providers" className="pt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.length === 0 && <Card className="col-span-full p-12 text-center text-muted-foreground">No providers found.</Card>}
            {filtered.map((c, i) => (
              <UserResourceCard key={c.id} item={c} index={i} type="provider" onEdit={() => edit(c)} onDelete={() => del.mutate(c.id)} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources" className="pt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.length === 0 && <Card className="col-span-full p-12 text-center text-muted-foreground">No resources found.</Card>}
            {filtered.map((c, i) => (
              <UserResourceCard key={c.id} item={c} index={i} type="resource" onEdit={() => edit(c)} onDelete={() => del.mutate(c.id)} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function UserResourceCard({ item, index, type, onEdit, onDelete }: any) {
  let extra = { capacity: 1, assigned_services: [] };
  try { if (item.notes) extra = JSON.parse(item.notes); } catch (e) {}

  return (
    <Card className="p-5 overflow-hidden transition-all hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary shrink-0">
          {type === "provider" ? `A${index + 1}` : `R${index + 1}`}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="truncate font-semibold">{item.name}</p>
            {type === "provider" && <BadgeCheck className="h-3 w-3 text-primary" />}
          </div>
          {type === "provider" ? (
            <>
              {item.email && <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"><Mail className="h-3 w-3" />{item.email}</p>}
              {item.phone && <p className="flex items-center gap-1 text-xs text-muted-foreground"><Phone className="h-3 w-3" />{item.phone}</p>}
            </>
          ) : (
            <p className="mt-1 text-xs text-muted-foreground">Capacity: {extra.capacity} people</p>
          )}
        </div>
        <div className="flex gap-1">
          <Button size="icon" variant="ghost" onClick={onEdit}><Pencil className="h-4 w-4" /></Button>
          <Button size="icon" variant="ghost" onClick={onDelete}><Trash2 className="h-4 w-4 text-destructive" /></Button>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t flex flex-wrap gap-1">
         {extra.assigned_services?.length > 0 ? (
           <span className="text-[10px] text-muted-foreground w-full mb-1">Assigned to {extra.assigned_services.length} services</span>
         ) : (
           <span className="text-[10px] text-muted-foreground w-full mb-1">Not assigned to any service</span>
         )}
      </div>
    </Card>
  );
}
