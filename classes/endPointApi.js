import { fechData } from "../utils/fechData.js";

export class EndPointApi {
  constructor(endPoint) {
    this.endPoint = endPoint;
  }
  getRecords() {
    const options = {
      method: "GET",
    };
    return fechData(`https://bsite.net/metalflap/${this.endPoint}`, options);
  }
  getRecord() {
    const options = {
      method: "GET",
    };
    return fechData(`https://bsite.net/metalflap/${this.endPoint}`, options);
  }

  addRecord(record) {
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(record),
    };
    fechData(`https://bsite.net/metalflap/${this.endPoint}`, options);
  }

  updateRecord(record) {
    const options = {
      method: "PUT",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(record),
    };

    fechData(`https://bsite.net/metalflap/${this.endPoint}`, options);
  }
  deleteRecord(record) {
    const options = {
      method: "DELETE",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify({
        record,
      }),
    };

    fechData(`https://bsite.net/metalflap/${this.endPoint}`, options);
  }
}
