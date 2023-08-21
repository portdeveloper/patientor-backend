import { patients } from "../../data/patients";
import { NewPatient, PatientWithoutSsn } from "../types";
import { v1 as uuid } from "uuid";

const getPatients = () => {
  return patients;
};

const getPatientsWithoutSsn = (): PatientWithoutSsn[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (patient: NewPatient) => {
  const newPatient = {
    id: uuid(),
    ...patient,
  };

  patients.push(newPatient);
  return newPatient;
};

export default { getPatients, getPatientsWithoutSsn, addPatient };
