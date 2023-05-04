# malaghe_utility

![ascii_malaghe_utility.png](ascii_malaghe_utility.png)

---

## Links:

### [npm utility package](https://www.npmjs.com/package/@apa_malaghe/utility)

### [Malaghe BackEnd](https://github.com/apakhbari/Malaghe-BE), [Malaghe FrontEnd](https://github.com/apakhbari/Malaghe-FE)

### [malaghe k8s + Skaffold (NOT MAINTAINED)](https://github.com/apakhbari/malaghe-k8s)

---

## Errors:

- bad-request --> 400 + message

- request-validation --> 400 + 'Invalid request parameters'

- not-authorized --> 401 + 'Not authorized'

- not-found --> 404 + 'Route not found'

- database-connection --> 500 + 'Error connecting to db'

---

## OrderStatus:

- Created

- Cancelled

- Completed

---

## ServiceStatus:

- Troubleshooting

- Transferring

- Repairing

- Received

---

## UsersRoles:

- User --> 0

- Admin --> 1993

- Operator --> 3

- Technician --> 5

- Transporter --> 7

---

## UsersGender:

- Woman --> زن

- Man --> مرد

---

## Events:

- OrderCreated = 'order:created'

  id: Types.ObjectId, version: number, userId: Types.ObjectId, expiresAt: string, serviceStatus?: ServiceStatus,

  store:[{id: Types.ObjectId, title: string, price: number, quantity: number}]

- OrderCancelled = 'order:cancelled'

  id: Types.ObjectId, version: number, userId: Types.ObjectId,

  store:[{id: Types.ObjectId, quantity: number;}]

- OrderUpdated = 'order:updated'

  id: Types.ObjectId, version: number, userId: Types.ObjectId, expiresAt: string, serviceStatus?: ServiceStatus,

  store?:[{id: Types.ObjectId, title: string, price: number, quantity: number}]

- OrderCompleted = 'order:completed'

  id: Types.ObjectId, version: string, userId: Types.ObjectId

<br>

- MagAssigned = 'mag:assigned'

  id: Types.ObjectId, version: number, title:string, storeId: Types.ObjectId

- MagUpdated = 'mag:updated'

  id: Types.ObjectId, version: number, slug: string, storeId?: Types.ObjectId

- MagDeleted = 'mag:deleted'

  id: Types.ObjectId, version: number, storeId?: Types.ObjectId

---

## MiddleWares:

- current-user

  UserPayload {id: string, email: string, mobile: number, fiName: string, laName: string, role: UserRoles}

- err-handler

  400 + 'Unhandled error'

- require-auth

- require-access

- validate-request

---

## Developed by APA, 2022

<br>

![ascii_apa.png](ascii_apa.png)
