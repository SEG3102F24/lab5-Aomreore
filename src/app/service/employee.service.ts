import { inject, Injectable } from '@angular/core';
import { Observable} from "rxjs";
import {Employee} from "../model/employee";
import {Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  setDoc,
  deleteDoc} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private firestore:  Firestore = inject(Firestore);
  
  getEmployee(): Observable<Employee[]> {
    const employee = collection(this.firestore,'employee');
    return collectionData(employee, {idField: 'id'}) as Observable<Employee[]>;
  }

  createEmployed(employed: Employee) {
    const employee = collection(this.firestore,  'employee');
    delete employed.id;
    // @ts-ignore
    return addDoc(employee, {...employed});
  }

  updateEmployed(employed: Employee) {
    const employedId = employed.id;
    delete employed.id;
    const employee = collection(this.firestore, 'employee');
    const employedRef = doc(employee, employedId!);
    // @ts-ignore
    return setDoc(employedRef, employed);
  }

  deleteemployed(employedId: string): Promise<void> {
    const employee = collection(this.firestore,'employee');
    const employedRef = doc(employee, employedId);
    return deleteDoc(employedRef);
  }
}
