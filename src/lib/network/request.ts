import {Either, left as Left, right as Right} from '@sweet-monads/either'
import {API_URL} from "lib/env";

class RequestError extends Error {
    constructor() {
        super()
        this.name = 'RequestError'
    }
}

// cors as cors is typescript whim
export enum HttpMethods {
    post = 'POST',
    delete = 'DELETE',
    get = 'GET'
}

const requestCommonOption = {
    mode: 'cors' as 'cors',
    method: HttpMethods.get
}

export const simpleRequest = async <T>(url: string, o?: RequestInit): Promise<Either<RequestError, T>> => {
    try {
        const reqPath = `http://${API_URL}/api/v1/${url}`
        const response = await fetch(reqPath, {...requestCommonOption, ...o})

        if (response.status !== 200) {
            return Left(new RequestError())
        }

        const jsonResponse = await response.json()
        return Right(jsonResponse)
    }
    catch (e) {
        return Left(new RequestError())
    }
}

export const postRequest = async <T>(url: string, data: Object, o: RequestInit): Promise<Either<RequestError, T>> => {
    try {
        const response = await fetch(url, {
            method: HttpMethods.post,
            ...o,
            body: JSON.stringify(data)
        }).then(r => r.json())
        return Right(response)
    }
    catch (e) {
        return Left(new RequestError())
    }
}