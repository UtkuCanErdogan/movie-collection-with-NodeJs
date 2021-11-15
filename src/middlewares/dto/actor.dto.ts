export interface ActorDto{
    id: string,
    name: string,
    surname: string,
    age: number,
    nationality: string
}

export interface createActorRequest{
    name: string,
    surname: string,
    age: number,
    nationality: string
}

export interface updateActorRequest{
    name: string,
    surname: string,
    age: number,
    nationality: string
}
