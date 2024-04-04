
import axios from "axios";
const APIURL = 'https://api.optigoapps.com/test/store.aspx';
// const ZENURL = 'http://zen/api/store.aspx'


export const CommonAPI = async (body) => {
    const storeInit = JSON.parse(localStorage.getItem('storeInit'));
    try {
        const { YearCode, version, token } = storeInit;
        const header = {
            Authorization: `Bearer ${token}`,
            Yearcode: YearCode,
            Version: version, 
            sp:"1"
        };
        const response = await axios.post(APIURL, body, { headers: header });
        return response?.data;

    } catch (error) {
        console.error('error is..', error);
    }
};

// export const UnCommonAPI = async(body) => {
//     try {
//         const { YearCode, version, token } = storeInit;
//         const header = {
//             Authorization: `Bearer ${token}`,
//             Yearcode: YearCode,
//             Version: version, 
//             sp:"1"
//         };
//         const response = await axios.post(ZENURL, body, { headers: header });
//         return response?.data;

//     } catch (error) {
//         console.error('error is..', error);
//     }
// };
