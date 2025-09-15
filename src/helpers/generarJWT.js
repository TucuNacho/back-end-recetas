import jwt from 'jsonwebtoken';

const generarJWT = async (Username,mail )=>{
    try {
        const payload= {Username, mail};
        const token = await jwt.sign(payload, process.env.SECRET_JWT,{expiresIn: '2h'});
        return token
    } catch (error) {
        console.error(error);
        throw new Error('Error al generar el token');
    }
}

export default generarJWT;
