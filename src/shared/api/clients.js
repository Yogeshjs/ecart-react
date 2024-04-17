import axios from 'axios';

export const productClient = axios.create({
  baseURL: import.meta.env.VITE_PRODUCT_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsdjB2aGNzbTAwMDNuMzdydHE1NW55dWUiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTcxMzI3MzU3MSwiZXhwIjoxNzEzMjc3MTcxfQ.SpSO6p3XSRYkdrHr5nhVjuhG6ueh_gN6hm58QZ_yePQ'
  }
});
