import axios from 'axios';

const BACKEND_URL = 'https://react-native-course-27ccb-default-rtdb.firebaseio.com';

export async function storeExpense(expenseData){
    const response = axios.post(
            BACKEND_URL + '/expenses.json',
            expenseData
    );
    console.log("response="+response.name)
    const id = response.name;
    return id;
}

export async function fetchExpenses(){
    const response = await axios.get(BACKEND_URL + '/expenses.json');

    const expenses = [];
    for (const key in  response.data) {
        const expenseObj ={
            id: key,
            amount: response.data[key].amount,
            date: response.data[key].date,
            description: response.data[key].description
        };
        expenses.push(expenseObj);
    }
    return expenses;
}

export function updateExpense(id, expenseData){
    return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id){
    return axios.delete(BACKEND_URL + `/expenses/${id}.json`)
}