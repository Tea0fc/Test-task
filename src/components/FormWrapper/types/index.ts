export interface IData {
  id: number
  marks: IMark[]
  type: NoteTypes
  login: string
  password: string | null
}

interface IMark {
  text: string
}

type NoteTypes = 'local' | 'LDAP'
