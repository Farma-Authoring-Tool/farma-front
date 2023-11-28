import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const apiProfessorsLos = {
  getAll: () => api.get('/api/professors/los'),
  create: (data: any) => api.post('/api/professors/los', data),
  get: (id: any) => api.get(`/api/professors/los/${id}`),
  update: (id: any, data: any) => api.put(`/api/professors/los/${id}`, data),
  delete: (id: any) => api.delete(`/api/professors/los/${id}`),
};

