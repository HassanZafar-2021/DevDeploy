import models from "../models/index.js";
import db from "../config/connection.js";
export default async (modelName, collectionName) => {
    try {
        const model = models[modelName];
        if (!model?.db?.db) {
            throw new Error(`Model ${modelName} is not properly initialized or missing database connection.`);
        }
        const modelExists = await model.db.db
            .listCollections({ name: collectionName })
            .toArray();
        if (modelExists.length) {
            await db.dropCollection(collectionName);
        }
    }
    catch (err) {
        console.error("Error in cleanDb:", err);
        throw err;
    }
};
