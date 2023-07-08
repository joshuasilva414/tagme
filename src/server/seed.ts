import {prisma} from "@/server/db/client";
import {faker} from "@faker-js/faker";

export default async function dummyData(n:number) {
    for(let i=0; i<n; i++) {
        await prisma.project.create({
            data: {
                name: faker.word.words({ count: { min: 3, max: 10 } }),
                owner: "user_2SH34C1ypE9UWOw9C6WmeffgBX5",
                projectDescription: faker.word.words({count: {min: 25, max:50}}),
                classes: Array.from({length:Math.ceil(Math.random() * 10)}, () => faker.animal.type()),
                taskDescription: faker.word.words({ count: { min: 10, max:50 } })
            }
        });
    }
}

// model Project {
//     id                 String   @id @default(auto()) @map("_id") @db.ObjectId
//     name               String
//     projectDescription String
//     storageUrl         String?
//     inputType          DataType @default(TEXT)
//     outputType         DataType @default(LABEL)
//     classes            String[] @default([])
//     taskDescription    String
// }
//
// enum DataType {
//     IMAGE
// IMAGE_MASK
// VIDEO
// TEXT
// LABEL
// }