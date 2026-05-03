import { Database } from './types';

// Mock data for the application
const MOCK_PROFILES = [
  {
    id: 'mock-user-123',
    full_name: 'Demo Admin',
    email: 'admin@example.com',
    role: 'admin',
    status: 'active',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }
];

const MOCK_SERVICES = [
  {
    id: 'service-1',
    name: 'Consultation',
    description: 'Professional consultation service',
    duration_minutes: 60,
    price_cents: 5000,
    active: true,
    owner_id: 'mock-user-123',
    created_at: new Date().toISOString(),
  },
  {
    id: 'service-2',
    name: 'Follow-up',
    description: 'Quick follow-up meeting',
    duration_minutes: 30,
    price_cents: 2500,
    active: true,
    owner_id: 'mock-user-123',
    created_at: new Date().toISOString(),
  }
];

const MOCK_CUSTOMERS = [
  {
    id: 'customer-1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    owner_id: 'mock-user-123',
    created_at: new Date().toISOString(),
  }
];

const MOCK_APPOINTMENTS = [
  {
    id: 'appointment-1',
    service_id: 'service-1',
    customer_id: 'customer-1',
    start_at: new Date().toISOString(),
    end_at: new Date(Date.now() + 3600000).toISOString(),
    status: 'confirmed',
    price_cents: 5000,
    owner_id: 'mock-user-123',
    created_at: new Date().toISOString(),
  }
];

const MOCK_PAYMENTS = [
  {
    id: 'payment-1',
    appointment_id: 'appointment-1',
    amount_cents: 5000,
    status: 'paid',
    method: 'credit_card',
    owner_id: 'mock-user-123',
    created_at: new Date().toISOString(),
  }
];

const mockData: Record<string, any[]> = {
  profiles: MOCK_PROFILES,
  services: MOCK_SERVICES,
  customers: MOCK_CUSTOMERS,
  appointments: MOCK_APPOINTMENTS,
  payments: MOCK_PAYMENTS,
};

// Helper to create a chainable query object
const createQueryBuilder = (tableName: string) => {
  const builder = {
    select: (query: string) => builder,
    order: (column: string, options?: any) => builder,
    eq: (column: string, value: any) => builder,
    maybeSingle: async () => {
      const data = mockData[tableName]?.[0] || null;
      return { data, error: null };
    },
    single: async () => {
      const data = mockData[tableName]?.[0] || null;
      return { data, error: null };
    },
    insert: (data: any) => {
      const newItem = { 
        ...data, 
        id: Math.random().toString(36).substr(2, 9), 
        created_at: new Date().toISOString(),
        active: data.active ?? true,
        price_cents: data.price_cents ?? 0,
        duration_minutes: data.duration_minutes ?? 60
      };
      mockData[tableName]?.push(newItem);
      
      // Update builder to return the single new item for .single() or .maybeSingle()
      const resultBuilder = {
        ...builder,
        single: async () => ({ data: newItem, error: null }),
        maybeSingle: async () => ({ data: newItem, error: null }),
        then: (callback: any) => Promise.resolve(callback({ data: newItem, error: null }))
      };
      return resultBuilder;
    },
    update: (data: any) => builder,
    delete: () => builder,
    then: (callback: any) => {
      // Handle the case where the builder is awaited directly
      const data = mockData[tableName] || [];
      return Promise.resolve(callback({ data, error: null }));
    }
  };
  
  // Make the builder itself awaitable
  (builder as any).catch = (callback: any) => Promise.resolve().catch(callback);
  
  return builder;
};

export const mockSupabase = {
  auth: {
    getUser: async () => ({ data: { user: { id: 'mock-user-123', email: 'admin@example.com' } }, error: null }),
    getSession: async () => ({ 
      data: { 
        session: { 
          user: { id: 'mock-user-123', email: 'admin@example.com' },
          access_token: 'mock-token',
        } 
      }, 
      error: null 
    }),
    signInWithPassword: async () => ({ 
      data: { 
        user: { id: 'mock-user-123', email: 'admin@example.com' },
        session: { access_token: 'mock-token', user: { id: 'mock-user-123' } }
      }, 
      error: null 
    }),
    signOut: async () => ({ error: null }),
    onAuthStateChange: (callback: any) => {
      // Simulate an immediate callback with the mock session
      callback('SIGNED_IN', { user: { id: 'mock-user-123', email: 'admin@example.com' } });
      return { data: { subscription: { unsubscribe: () => {} } } };
    },
  },
  from: (table: string) => createQueryBuilder(table),
};
