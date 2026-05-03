const fmtMoney = (cents) => (cents / 100).toLocaleString(void 0, { style: "currency", currency: "USD" });
const fmtDate = (d) => new Date(d).toLocaleDateString(void 0, { month: "short", day: "numeric", year: "numeric" });
const fmtTime = (d) => new Date(d).toLocaleTimeString(void 0, { hour: "numeric", minute: "2-digit" });
const fmtDateTime = (d) => `${fmtDate(d)} · ${fmtTime(d)}`;
const downloadCsv = (filename, rows) => {
  if (!rows.length) return;
  const headers = Object.keys(rows[0]);
  const csv = [
    headers.join(","),
    ...rows.map(
      (r) => headers.map((h) => `"${String(r[h] ?? "").replace(/"/g, '""')}"`).join(",")
    )
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};
export {
  fmtDateTime as a,
  downloadCsv as d,
  fmtMoney as f
};
