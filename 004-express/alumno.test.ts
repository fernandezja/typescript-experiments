import { Alumno } from './alumno';

describe('Alumno', () => {
  let alumno: Alumno;

  beforeEach(() => {
    alumno = new Alumno('Juan', 20, '1A');
  });

  test('should create an Alumno instance with correct properties', () => {
  
    expect(alumno.getNombre()).toBe('Juan');
    expect(alumno.getEdad()).toBe(20);
  });

  test('should update alumno properties', () => {
    alumno.setNombre('María');
    alumno.setEdad(22);

    expect(alumno.getNombre()).toBe('María');
    expect(alumno.getEdad()).toBe(22);
  });

  test('should create alumno with different values', () => {
    const otroAlumno = new Alumno('Pedro', 21, '1B');
    
    expect(otroAlumno.getNombre()).toBe('Pedro');
    expect(otroAlumno.getEdad()).toBe(21);
  });
}); 