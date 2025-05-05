export type TitanicDataType = {
  PassengerId: any;
  Survived: any;
  Pclass: any;
  Name: any;
  Sex: any;
  Age: any;
  SibSp: any;
  Parch: any;
  Ticket: any;
  Fare: any;
  Cabin: any;
  Embarked: any;
};

export interface ButtonProps {
  buttontext: string;
}

export interface TableData {
  id: number;
  name: string;
  age: number;
  occupation: string;
}

export const data: TableData[] = [
  { id: 1, name: "John Doe", age: 30, occupation: "Engineer" },
  { id: 2, name: "Jane Smith", age: 25, occupation: "Designer" },
  { id: 3, name: "Peter Jones", age: 40, occupation: "Manager" },
];
