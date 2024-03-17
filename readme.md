# Upplýsingar um hvernig setja skuli upp verkefnið.

1. setja upp .env með eftirfarandi breytum:

   DATABASE_URL=

   TOKEN_SECRET=

   PORT=

   CLOUDINARY_CLOUD_NAME=

   CLOUDINARY_API_KEY=

   CLOUDINARY_API_SECRET=

2. keyra npm install
3. keyra npm run setup
4. keyra npm run dev

# Upplýsingar um hvernig á að keyra test.
1. setja upp .env með eftirfarandi breytum:

   DATABASE_URL=

   TOKEN_SECRET=

   PORT=

   CLOUDINARY_CLOUD_NAME=

   CLOUDINARY_API_KEY=

   CLOUDINARY_API_SECRET=

2. keyra npm install

# Dæmi um köll í vefþjónustu m.v. test gögn.

1. POST á /photos með body: {"photo_url": "https://www.mbl.is/a/img/haus_new/mbl.svg"}
2. GET á /photos?public_id=[public_id sem kemur í response í postinu]
3. POST á /signup með body: {"username": "sveinki", "password": "123"}
4. POST á /login með body: {"username": "sveinki", "password": "123"} copy token sem kemur í response og setja í header sem bearer token
5. POST á /tasks með body: {"title": "Hópverkefni 1"}
6. GET á /tasks copy id sem kemur í response
7. PATCH á /tasks með body: {"id": [id sem sást í /get], "description": "hello"}
8. DELETE á /tasks með body: {"id": [id sem sást í /get]}

# Innskráning fyrir admin stjórnanda ásamt lykilorði.

Hægt að búa til nýjan notanda en líka hægt að nota t.d. username: admin, password: 123

# Nöfn og notendanöfn allra í hóp.

1. Einar Andri Víðisson - Einar Andri
2. Eiður Kristinsson - EidurK
