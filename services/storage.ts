
import { Lead } from '../types';

const STORAGE_KEY = 'excellities_leads';

export const saveLead = (lead: Omit<Lead, 'id' | 'timestamp'>): Lead => {
  const leads = getLeads();
  const newLead: Lead = {
    ...lead,
    id: Math.random().toString(36).substr(2, 9),
    timestamp: Date.now(),
  };
  const updatedLeads = [newLead, ...leads];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLeads));
  return newLead;
};

export const getLeads = (): Lead[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (e) {
    return [];
  }
};

export const deleteLead = (id: string) => {
  const leads = getLeads();
  const updated = leads.filter(l => l.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
