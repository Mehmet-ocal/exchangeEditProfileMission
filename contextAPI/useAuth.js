import { createContext, useState } from "react";
import { api } from "../constans/conf/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginService, updateProfileService } from "../service";
import { showErrorMessage, showSuccessMessage } from "../utils/alert";


const UseAuth = createContext();

const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);

    const authControl = async () => {
        const token = await AsyncStorage.getItem('jwt');
        const user = await AsyncStorage.getItem('user');

        if (token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setUser(JSON.parse(user));
            setIsAuth(true);
        }
    }

    const logout = async (navigate) => {
        await AsyncStorage.removeItem('jwt');
        await AsyncStorage.removeItem('user');
        api.defaults.headers.common['Authorization'] = null;
        setIsAuth(false);
        navigate('Login');
    }

    const login = async (data, navigate) => {
        const res = await loginService(data);
        if (res.status) {
            setUser(res.user);
            navigate('Main');
        }
    };

    const updateProfile = async (data, navigate) => {
        const res = await updateProfileService(data)
        if (res.success) {
            setUser(res.data);
            navigate('Main');
            showSuccessMessage()
        } else {
            showErrorMessage(res?.data?.error?.message || "Bir hata oluştu")
        }
    }

    return (
        <UseAuth.Provider value={{ isAuth, setIsAuth, authControl, logout, user, login, updateProfile }}>
            {children}
        </UseAuth.Provider>
    )
};

export { AuthProvider, UseAuth as useAuth };
