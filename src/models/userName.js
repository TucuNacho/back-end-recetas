import mongoose, { Schema } from "mongoose";

const userName = new Schema({
  Username: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 100
  },
  mail: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (valor) => {
        return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
          valor
        );
      },
    },
  },
});

const Usuario = mongoose.model("usuario", userName);

export default Usuario;
