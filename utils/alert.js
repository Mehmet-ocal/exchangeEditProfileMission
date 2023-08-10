import { Alert } from "react-native";

export const showSuccessMessage = () => {
    // Başarılı mesajı göstermek için Alert kullanıyoruz.
    Alert.alert('Başarılı', 'Bilgileriniz başarıyla güncellendi!', [
        { text: 'Tamam' }
    ]);
};


export const showErrorMessage = (errorText) => {
    // Başarısız mesajı göstermek için Alert kullanıyoruz.
    Alert.alert('Bilgileriniz güncellenemedi!', errorText, [
        { text: 'Tamam' }
    ]);
};