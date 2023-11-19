import mongoose from "mongoose"

interface dbProps {
    connections: [
        {
            readyState: boolean
        }
    ]
}

export const connectToDB = async () => {
    const connection = {
        isConnected: false
    }
    try{
        if(connection.isConnected) return;
        const db = await mongoose.connect(process.env.MONGO as string) as unknown
        connection.isConnected = (db as dbProps).connections[0].readyState;
    }catch(error){
        throw new Error(error as string)
    }

}