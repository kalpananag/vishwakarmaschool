export interface Course {
  id: string
  name: string
  description: string
  //teacher_id: string
  credits: number
  created_at: string
}

export interface Student {
  id: string
  first_name: string
  last_name: string
  email: string
  enrollment_date: string
  courses: string[]
}

export interface Teacher {
  id: string
  first_name: string
  last_name: string
  email: string
  department: string
  courses: string[]
}

export interface Staff {
  id: string
  first_name: string
  last_name: string
  email: string
  role: string
  department: string
}
