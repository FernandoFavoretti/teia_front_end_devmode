import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';



const login = async () => {
    const email = 'emailvalido'
    const password = 'senhavalida'
    console.log('tentando logar')
    try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();
    return token
} catch (error) {
    console.error('Error logging in:', error);
    }
};    

export const postTeachingPlan = async (context: string, disciplina: string, escolaridade: string) => {
    try {
        // const token = await login(); // Await the login function to get the token
        const token = await login();
        if (!token) {
            console.error('No token available');
            return;
        }

        const response = await fetch('https://course-gen-backend-1004053150890.us-central1.run.app/health', {
            method: 'GET', // Specify the method as POST
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error posting teaching plan:', error);
    }
};