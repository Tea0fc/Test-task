export interface IData {
  id: number
  marks: IMark[]
  type: NoteTypes
  login: string
  password: string | null
}

export interface IMark {
  text: string
}

export type NoteTypes = 'local' | 'LDAP'
