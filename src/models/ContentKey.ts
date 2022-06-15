export interface ContentKey {
    id: string;
    category: number;
}

export interface Test {
    name: string;
    id: number;
}

export class TestImpl {
    name : string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    log() : void {
        console.log('Name ${this.name}');
    }
}

export type SUNE = "open" | "closed"

const i = {
    id : 10,
    name : 'kalle'
}

export function print() {
    const tmp = {
        name: 'sune',
        id: 123
    }
    somePrint(tmp)
}

function somePrint(t: Test) {
    console.log(`${t.name}`)
}
