export async function fetchData(path) {
    try {
        const responce = await fetch(path);
        if (!responce.ok) {
            throw new Error('Ошибка получения данных');
        }
        const data = await responce.json();

        return data;
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}
