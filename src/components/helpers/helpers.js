// data imagenes carousel home
import banner1 from '../../assets/carousel/Banner1.png'
import banner2 from '../../assets/carousel/Banner2.png'
import banner3 from '../../assets/carousel/Banner3.png'
import banner4 from '../../assets/carousel/Banner4.png'

// data imagenes doctores 'noostros'
import Barbieri from '../../assets/nosotros/Barbieri.png'
import Benitez from '../../assets/nosotros/Benitez.png'
import Millan from '../../assets/nosotros/Millan.png'
import Osso from '../../assets/nosotros/Osso.png'

// data practicas 
import imgPract_1 from '../../assets/practicas/Practica1.png'
import imgPract_2 from '../../assets/practicas/Practica2.png'
import imgPract_3 from '../../assets/practicas/Practica3.png'
import imgPract_4 from '../../assets/practicas/Practica4.png'

export const dataBanner = [
    {
        img: banner1,
        title: 'Bienvenidos',
        info: 'Urologia de Diagnostico y Tratamiento',
        redirect:'nosotros'
    },
    {
        img: banner2,
        title: 'Profesionales',
        info: 'Trabajamos con profesionales experimentados',
        redirect:'nosotros'
    },
    {
        img: banner3,
        title: 'Nuestras practicas',
        info: 'Trabajamos',
        redirect:'practicas'
    },
    {
        img: banner4,
        title: 'Litotricia Extracorpórea',
        info: 'Urologia de Diagnostico y Tratamiento',
        redirect:'tecnologias'
    }
]

export const itemsTecnologys = [
    {
        item: "La litotricia extracorpórea es un tratamiento ambulatorio."
    },
    {
        item: " No existen límites de edad para su aplicación"
    },
    {
        item: "Puede utilizarse en la mayoría de los casos de cálculos de la vía urinaria."
    },
    {
        item: "No requiere anestesia."
    },
    {
        item: "Es un procedimiento no invasivo de gran eficacia."
    },
    {
        item: "Evita la cicatriz de la cirugía."
    },
    {
        item: "Mínimo riesgo de complicaciones."
    },
    {
        item: "Menor riesgo de infección."
    },
    {
        item: "El tiempo de recuperación se reduce a horas."
    },
    {
        item: "No permite que usted baje su capacidad laboral al tener un rápido retorno al trabajo."
    },
]



export const dataNosotros = [
    {
        name: 'Arsenio',
        apellido: 'Barbieri',
        thumbnail: Barbieri,
        info: 'Finalizó sus estudios en la Universidad Nacional del Nordeste y siguió a especialidad en el Hospital Italiano de la provincia de Buenos Aires',
        cert: "MN 52335"
    },
    {
        name: 'Sergio',
        apellido: 'Benitez Femenia',
        thumbnail: Benitez,
        info: 'Finalizó sus estudios en la Universidad Nacional del Nordeste y siguió a especialidad en el Hospital Italiano de la provincia de Buenos Aires.',
        cert: "MN 52335"
    },
    {
        name: 'Juan José',
        apellido: "Dall'Osso",
        thumbnail: Osso,
        info: 'Finalizó sus estudios en la Universidad Nacional del Nordeste y siguió a especialidad en el Hospital Italiano de la provincia de Buenos Aires',
        cert: "MN 52335"
    },
    {
        name: 'Ramiro',
        apellido: 'Millán',
        thumbnail: Millan,
        info: 'Finalizó sus estudios en la Universidad Nacional del Nordeste y siguió a especialidad en el Hospital Italiano de la provincia de Buenos Aires',
        cert: "MN 52335"
    }
]

export const dataPracticas = [
    {
        title: 'Ecografia general',
        img: imgPract_1,
        details: {
            isWhat: {
                info_1: 'La ecografía urológica (renal, vesical y prostática) es una prueba diagnóstica utilizada por los urólogos de forma rutinaria en casi todos los pacientes que van a la consulta.La ecografía urológica se usa habitualmente para la valoración del riñón, vejiga, próstata, testículo y pene.',
                info_2: 'La ecografía urológica se realiza igual que una ecografía abdominal o torácica. El paciente se tumbará en una camilla, normalmente con el abdomen y bajo vientre descubierto.El especialista aplicará un gel especial conductor e irá pasando por encima el transductor, para ir analizando la zona.',
                whyDo: 'La ecografía urológica se realiza igual que una ecografía abdominal o torácica. El paciente se tumbará en una camilla, normalmente con el abdomen y bajo vientre descubierto. El especialista aplicará un gel especial conductor e irá pasando por encima el transductor, para ir analizando la zona. Las imágenes se irán viendo en un monitor. A veces será necesario que el paciente se coloque de lado para que se vean mejor algunos órganos.',
                whatConsist: 'La ecografía urológica se realiza igual que una ecografía abdominal o torácica. El paciente se tumbará en una camilla, normalmente con el abdomen y bajo vientre descubierto. El especialista aplicará un gel especial conductor e irá pasando por encima el transductor, para ir analizando la zona. Las imágenes se irán viendo en un monitor. A veces será necesario que el paciente se coloque de lado para que se vean mejor algunos órganos.',
                prepare: 'No es necesaria ninguna preparación específica. Así, no será requisito estar en ayunas, pero sí que la vejiga esté llena, de manera que deberá beber mucha agua antes de la prueba y no ir a orinar. Hay que beber abundante agua desde, al menos, dos horas antes de la ecografía. El hecho de que la vejiga esté llena facilita la visualización de las paredes y de los órganos colindantes, como los ovarios, el útero o la próstata, en el caso de los varones. No se recomienda emplear cremas ni pomadas en la zona antes de la prueba, ya que la prueba de imagen puede verse distorsionada.',
                procces: 'Descripcion'
            }
        }
    },
    {
        title: 'Cirugia laparoscópica',
        img: imgPract_2,
        details: {
            isWhat: {
                info_1: 'La ecografía urológica (renal, vesical y prostática) es una prueba diagnóstica utilizada por los urólogos de forma rutinaria en casi todos los pacientes que van a la consulta.La ecografía urológica se usa habitualmente para la valoración del riñón, vejiga, próstata, testículo y pene.',
                info_2: 'La ecografía urológica se realiza igual que una ecografía abdominal o torácica. El paciente se tumbará en una camilla, normalmente con el abdomen y bajo vientre descubierto.El especialista aplicará un gel especial conductor e irá pasando por encima el transductor, para ir analizando la zona.',
                whyDo: 'La ecografía urológica se realiza igual que una ecografía abdominal o torácica. El paciente se tumbará en una camilla, normalmente con el abdomen y bajo vientre descubierto. El especialista aplicará un gel especial conductor e irá pasando por encima el transductor, para ir analizando la zona. Las imágenes se irán viendo en un monitor. A veces será necesario que el paciente se coloque de lado para que se vean mejor algunos órganos.',
                whatConsist: 'La ecografía urológica se realiza igual que una ecografía abdominal o torácica. El paciente se tumbará en una camilla, normalmente con el abdomen y bajo vientre descubierto. El especialista aplicará un gel especial conductor e irá pasando por encima el transductor, para ir analizando la zona. Las imágenes se irán viendo en un monitor. A veces será necesario que el paciente se coloque de lado para que se vean mejor algunos órganos.',
                prepare: 'No es necesaria ninguna preparación específica. Así, no será requisito estar en ayunas, pero sí que la vejiga esté llena, de manera que deberá beber mucha agua antes de la prueba y no ir a orinar. Hay que beber abundante agua desde, al menos, dos horas antes de la ecografía. El hecho de que la vejiga esté llena facilita la visualización de las paredes y de los órganos colindantes, como los ovarios, el útero o la próstata, en el caso de los varones. No se recomienda emplear cremas ni pomadas en la zona antes de la prueba, ya que la prueba de imagen puede verse distorsionada.',
                procces: ''
            }
        }
    },
    {
        title: 'Uroflujometría',
        img: imgPract_3,
        details: {
            isWhat: {
                info_1: 'La ecografía urológica (renal, vesical y prostática) es una prueba diagnóstica utilizada por los urólogos de forma rutinaria en casi todos los pacientes que van a la consulta.La ecografía urológica se usa habitualmente para la valoración del riñón, vejiga, próstata, testículo y pene.',
                info_2: 'La ecografía urológica se realiza igual que una ecografía abdominal o torácica. El paciente se tumbará en una camilla, normalmente con el abdomen y bajo vientre descubierto.El especialista aplicará un gel especial conductor e irá pasando por encima el transductor, para ir analizando la zona.',
                whyDo: 'La ecografía urológica se realiza igual que una ecografía abdominal o torácica. El paciente se tumbará en una camilla, normalmente con el abdomen y bajo vientre descubierto. El especialista aplicará un gel especial conductor e irá pasando por encima el transductor, para ir analizando la zona. Las imágenes se irán viendo en un monitor. A veces será necesario que el paciente se coloque de lado para que se vean mejor algunos órganos.',
                whatConsist: 'La ecografía urológica se realiza igual que una ecografía abdominal o torácica. El paciente se tumbará en una camilla, normalmente con el abdomen y bajo vientre descubierto. El especialista aplicará un gel especial conductor e irá pasando por encima el transductor, para ir analizando la zona. Las imágenes se irán viendo en un monitor. A veces será necesario que el paciente se coloque de lado para que se vean mejor algunos órganos.',
                prepare: 'No es necesaria ninguna preparación específica. Así, no será requisito estar en ayunas, pero sí que la vejiga esté llena, de manera que deberá beber mucha agua antes de la prueba y no ir a orinar. Hay que beber abundante agua desde, al menos, dos horas antes de la ecografía. El hecho de que la vejiga esté llena facilita la visualización de las paredes y de los órganos colindantes, como los ovarios, el útero o la próstata, en el caso de los varones. No se recomienda emplear cremas ni pomadas en la zona antes de la prueba, ya que la prueba de imagen puede verse distorsionada.',
                procces: ''
            }
        }
    },
    {
        title: 'Biopsia Prostática',
        img: imgPract_4,
        details: {
            isWhat: {
                info_1: 'La ecografía urológica (renal, vesical y prostática) es una prueba diagnóstica utilizada por los urólogos de forma rutinaria en casi todos los pacientes que van a la consulta.La ecografía urológica se usa habitualmente para la valoración del riñón, vejiga, próstata, testículo y pene.',
                info_2: 'La ecografía urológica se realiza igual que una ecografía abdominal o torácica. El paciente se tumbará en una camilla, normalmente con el abdomen y bajo vientre descubierto.El especialista aplicará un gel especial conductor e irá pasando por encima el transductor, para ir analizando la zona.',
                whyDo: 'La ecografía urológica se realiza igual que una ecografía abdominal o torácica. El paciente se tumbará en una camilla, normalmente con el abdomen y bajo vientre descubierto. El especialista aplicará un gel especial conductor e irá pasando por encima el transductor, para ir analizando la zona. Las imágenes se irán viendo en un monitor. A veces será necesario que el paciente se coloque de lado para que se vean mejor algunos órganos.',
                whatConsist: 'La ecografía urológica se realiza igual que una ecografía abdominal o torácica. El paciente se tumbará en una camilla, normalmente con el abdomen y bajo vientre descubierto. El especialista aplicará un gel especial conductor e irá pasando por encima el transductor, para ir analizando la zona. Las imágenes se irán viendo en un monitor. A veces será necesario que el paciente se coloque de lado para que se vean mejor algunos órganos.',
                prepare: 'No es necesaria ninguna preparación específica. Así, no será requisito estar en ayunas, pero sí que la vejiga esté llena, de manera que deberá beber mucha agua antes de la prueba y no ir a orinar. Hay que beber abundante agua desde, al menos, dos horas antes de la ecografía. El hecho de que la vejiga esté llena facilita la visualización de las paredes y de los órganos colindantes, como los ovarios, el útero o la próstata, en el caso de los varones. No se recomienda emplear cremas ni pomadas en la zona antes de la prueba, ya que la prueba de imagen puede verse distorsionada.',
                procces: ''
            }
        }
    }
]