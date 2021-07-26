import axios from 'axios';
const API_URL = 'https://thinkst-frontend-resources.s3-eu-west-1.amazonaws.com/incidents/data.json';

export async function getAllAlerts() {
  let alerts = [];
  const response = await axios.get(`${API_URL}`);
  alerts = response.data
  return alerts;
}