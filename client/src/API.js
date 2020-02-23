const API_URL = 'http://localhost:1338'

export async function listLogEntries(){
    const response = await fetch(`${API_URL}/api/logs`);
    return response.json();
}