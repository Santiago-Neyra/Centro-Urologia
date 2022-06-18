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
        redirect: 'nosotros'
    },
    {
        img: banner2,
        title: 'Profesionales',
        info: 'Trabajamos con profesionales experimentados',
        redirect: 'nosotros'
    },
    {
        img: banner3,
        title: 'Nuestras practicas',
        info: 'Trabajamos',
        redirect: 'practicas'
    },
    {
        img: banner4,
        title: 'Litotricia Extracorpórea',
        info: 'Urologia de Diagnostico y Tratamiento',
        redirect: 'tecnologias'
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
                whyDo: 'El médico de cabecera, el médico internista, el urólogo o el ginecólogo pueden hacer una historia clínica y una exploración clínica específica pero, para empezar el estudio del problema que tenga el paciente, la ecografía urológica suele ser la prueba de elección en muchas patologías del Aparato Urinario.',
                whatConsist: 'La ecografía urológica se realiza igual que una ecografía abdominal o torácica. El paciente se tumbará en una camilla, normalmente con el abdomen y bajo vientre descubierto. El especialista aplicará un gel especial conductor e irá pasando por encima el transductor, para ir analizando la zona. Las imágenes se irán viendo en un monitor. A veces será necesario que el paciente se coloque de lado para que se vean mejor algunos órganos.',
                prepare: 'No es necesaria ninguna preparación específica. Así, no será requisito estar en ayunas, pero sí que la vejiga esté llena, de manera que deberá beber mucha agua antes de la prueba y no ir a orinar. Hay que beber abundante agua desde, al menos, dos horas antes de la ecografía. El hecho de que la vejiga esté llena facilita la visualización de las paredes y de los órganos colindantes, como los ovarios, el útero o la próstata, en el caso de los varones. No se recomienda emplear cremas ni pomadas en la zona antes de la prueba, ya que la prueba de imagen puede verse distorsionada.'

            }
        }
    },
    {
        title: 'Cirugia laparoscópica',
        img: imgPract_2,
        details: {
            isWhat: {
                info_1: 'La laparoscopia es la alternativa mínimamente invasiva a la cirugía abierta convencional en la que se utiliza una pequeña cámara llamada laparoscopio para ver dentro del abdomen. Se realiza a través de pequeños orificios en la cavidad abdominal.',
                info_2: 'Esta técnica es una alternativa mínimamente invasiva a la cirugía abierta tradicional. Se realiza a través de pequeñas incisiones en la pared abdominal, de entre 0,5 y 1 centímetro.',
                whyDo: 'La laparoscopia es una técnica mínimamente invasiva que se utiliza como procedimiento diagnóstico o terapéutico en diversos campos de la Medicina y Cirugía. Concretamente en Urología, se utiliza sobre todo en las patologías de la próstata y renales, por ejemplo la cirugía del cáncer de próstata, del cáncer vesical, cáncer renal o las litiasis renales, entre otros procedimientos quirúrgicos.',
                whatConsist: 'Durante el procedimiento, se introduce en el abdomen un laparoscopio. La cámara que incorpora permite al médico inspeccionar, desde un monitor, los órganos pélvicos y, si es necesario, introducir otros instrumentos, generalmente pinzas, bisturí o tijeras, a través del mismo laparoscopio para corregir algún problema. Las incisiones de la cirugía laparoscópica suelen medir de 0.5 a 1.5 cm, mientras que estas mismas operaciones en la cirugía convencional podían suponer incisiones de entre 10 y 20 cm. También es posible la introducción de gas CO2 para favorecer la visión de la cavidad abdominal y desarrollar la cirugía en un espacio más amplio. \n Las ventajas de la laparoscopia en urología son muchas, como por ejemplo que se requiere menor tiempo de hospitalización y recuperación, hay menos posibilidades de complicaciones infecciosas, disminuye el dolor postoperatorio y no quedan cicatrices visibles.'
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
                process: [
                    'Para realizar la flujometría deberá dar una muestra de orina, puede parecer incómodo, pero no debería experimentar ninguna molestia durante la prueba, es una prueba sencilla, rápida y no invasiva.',
                    'Se le pedirá tener la vejiga llena y con ganas de orinar, por lo que deberá beber abundantes líquidos previo a la prueba (en torno a 1-1.5 litros de agua idealmente).',
                    'Deberá orinar en un dispositivo con forma de embudo o en un váter especial para la flujometría (Imagen 1), generalmente en un baño con privacidad. Es importante que no coloque papel higiénico en el inodoro ni en el dispositivo.',
                    'El aparato calcula la cantidad de orina que pasa, la tasa de flujo en mililitros por segundo y el tiempo que se tarda en vaciar la vejiga por completo y registrará esta información en un gráfico. Durante la micción normal, el flujo inicial de orina comienza lentamente, se acelera y finalmente vuelve a disminuir, si se considera necesario al terminar de orinar se realizará una ecografía para valorar la cantidad de orina residual dentro de la vejiga.',
                    'Los médicos generalmente usan la tasa de flujo máximo (Qmax), junto con su patrón de vaciado y el volumen de orina, para determinar la gravedad de cualquier bloqueo u obstrucción.',
                    'Una disminución en el flujo de orina puede sugerir que tiene músculos de la vejiga débiles o una obstrucción en la uretra.',
                ]

            }
        }
    },
    {
        title: 'Biopsia Prostática',
        img: imgPract_4,
        details: {
            isWhat: {
                info_1: 'Es la extracción de muestras diminutas de tejido prostático para examinarlas en busca de signos de cáncer de próstata. La próstata es una glándula pequeña del tamaño de una nuez que se encuentra justo debajo de la vejiga.',
                whyDo: 'Una biopsia transrectal de próstata se realiza en régimen ambulatorio (no requiere ingreso), bajo anestesia local o sedación. El procedimiento comienza introduciendo una sonda en el recto para localizar ecográficamente la próstata. En la mayoría de los casos se toman 8-16 muestras que son enviadas a anatomía patológica para su análisis microscópico. Los resultados tardan entre 1 y 4 semanas dependiendo del hospital donde se haga.',
                whatConsist: 'El médico inserta rápidamente una aguja delgada y hueca en la próstata.Esto se hace a través de la pared del recto (una biopsia transrectal) o a través de la piel entre el escroto y el ano (una biopsia transperineal). Al retirar la aguja, se extrae un pequeño cilindro de tejido prostático. Esto se repite varias veces.',
                prepare: 'Los riesgos más importantes de una biopsia de próstata son la hemorragia y la infección, ya que se realiza vía transrectal. Para prevenir estas complicaciones se requiere la siguiente preparación:',
                prepareli: ['Dejar de tomar antiagregantes plaquetarios y/o anticoagulantes.', 'Ponerse un enema rectal: se debe aplicar la noche anterior a la biopsia si se programa por la mañana, o la misma mañana del procedimiento si se programa por la tarde.', 'Tomar un antibiótico para prevenir infección.']
            }
        }
    }
]



export const ventajasTecnologia = [
    { ventaja: 'La litotriCia extracorporea permite el tratamiento de los calculos urinarios sin cirugia. Estos cálculos deben tener un tamaño menor a 2 cm.' },
    { ventaja: 'El tratamiento es ambulatorio.' },
    { ventaja: 'Con los buenos equipos no es necesario el uso de anestesia.' },
    { ventaja: 'Se puede realizar en pacientes con patología cardíaca.' }
]