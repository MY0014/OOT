// src/Data/mainQuestAdult.js

export const MAIN_QUEST_ADULT = [
    {
    id: 'adult_1',
    title: 'Templo del Bosque',
    location: 'Pueblo Kakariko',
    era: 'Adulto',
    requirements: 'Espada Maestra',
    keyItems: ['Espada Maestra'],
    steps:[
      {
        id: 'g1',
        text: 'Antes de ir al Templo de Bosque tendras que ir al pueblo de Kakariko para visiatr el cementerio (Esta en la esquina sureste del mapa del pueblo, pasando por un estrecho pasillo).',
        image: require('../../assets/images/156.png')
      },
      {
        id: 'g2',
        text: 'Cuando estes alli, tira de la tumba que esta en el lado izquierdo y aparecera un agujero por el que te tienes que tirar (es una tumba que tiene 3 flores), para moverla, ponte detras de ella.',
        image: require('../../assets/images/157.png')
      },
      {
        id: 'g3',
        text: 'Dentro te encontraras con el espiritu del entrerrador Dampe, el cual te desafiara a una carrera. Lo que tienes que hacer es seguirle de cerca, evitando tocar el fuego que lanza de vez en cuando.',
        image: require('../../assets/images/158.png')
      },
      {
        id: 'g4',
        text: 'No te separes de el, porque sino te perderas y no podras encontrar el camino. Cuando llegues al final del recorrido, habla de nuevo con Dampe y te recompensara con el cofre grande que contiene el Gancho.',
        image: require('../../assets/images/159.png')
      },
      {
        id: 'g5',
        text: 'Para salir de la habitacion en la que consigues el gancho, entra por la puerta del fondo y toca la Cancion del Tiempo junto al gran bloque azul que encuentras dentro (el bloque tiene el mismo dibujo que la puerta del Templo del Tiempo), Al tocar la cancio el bloque desaparecera y aparecera una escalera que te lleva al molino de Kakariko.',
        image: require('../../assets/images/160.png')
      },
      {
        id: 'g6',
        text: 'Sal del pueblo Kakariko y ve al Bosque Kokiri. Cuando estes alli,trepa por la pared que esta detras de la casa de Mido para llegar al Bosque Perdido.',
        image: require('../../assets/images/161.png')
      },
      {
        id: 'g7',
        text: 'Dentro del Bosque Perdido, sigue el siguiente recorrido: DERECHA, IZQUIERDA, DERECHA. Llegaras a un lugar donde hay un niño que te impide pasar por la cueva. Para que puedas pasar deberas de tocar la cancion de Saria a su lado y este se apartara. ',
        image: require('../../assets/images/162.png')
      },
      {
        id: 'g8',
        text: 'Una vez que se haya movido, entra por la cueva, y despues de a la IZQUIERDA y despues DERECHA. Asi llegaras a la Pradera Sagrada del Bosque. Antes de entrar al laberinto, te enfrentaras con 1 o 2 lobos, basta con golpearlos en el momento que van a lanzar un ataque para destruirlos.',
        image: require('../../assets/images/163.png')
      },
      {
        id: 'g9',
        text: 'Deberas de cruzar el laberinto para poder llagar a la entrada del Templo del Bosque. Dentro del laberinto esta lleno de enemigos muy grandes; la forma mas facil de derrotarlos es usando el gancho o la espada y esperar que el enemigo se encuentre de espaldas.',
        image: require('../../assets/images/164.png')
      },
      {
        id: 'g10',
        text: 'Cuando llegues a la salida del laberito habra un enemigo que estara esperando en la rampa que lleva al Templo del Bosque, este tiene un Garrote grande que golpea contra el suelo y lanza ondas que hacen que no puedas pasar; basta con ir cruzando en zigzag del lado opuesto de donde lanzara el golpe. Una vez que el enemigo quede de espaldas a ti, destruyelo con la espada.',
        image: require('../../assets/images/165.png')
      },
      {
        id: 'g11',
        text: 'Una vez en la entrada del Templo, aparecera Sheik, el cual te mostrara una nueva cancion para la Ocarina llamada el Minutero del Bosque. Al tocar esta cancion te permitira volver al punto de inicio (la entrada del Templo).',
        image: require('../../assets/images/166.png')
      },
      {
        id: 'g12',
        text: 'Como la entrada al templo del bosque esta elevada, deberas de usar el gancho para sujetarte de una rama que sobresale del tronco que queda justo enfrente de ti.',
        image: require('../../assets/images/167.png')
      },
      {
        id: 'g13',
        text: 'Una vez que subas encontraras la entra, no sin antes deberas de derrotar a los dos lobos que aparecen cuidando la entrada.',
        image: require('../../assets/images/168.png')
      },
      {
        id: 'g14',
        text: 'Para acceder al Templo, te pediran una llave la cual si te fijas bien existen dos trondos en cada lado, deberas subir por el del lado derecho (ahi podras ver una skulltula dorada). Despues de esto salta a la otro lado del tronco y veras un cofre que contiene la llave para poder abir la puerta.',
        image: require('../../assets/images/170.png')
      },
      {
        id: 'g15',
        text: 'En la primera habitacion encontraras una Skulltula que cuelga del techo, Para eliminarla debes de golpearla con el gancho. En la siguiente habitacion veras que hay un cuarto con 4 antorchars de las que salen 4 fantasmas y cada uno de ellos se ira por una puerta.',
        image: require('../../assets/images/171.png')
      },
      {
        id: 'g16',
        text: 'Primero deberas entrar por la puerta de enfrente ( antes de la puerta se encuentra una skulltula dorada). En el pasillo de esta habitacion tendras que derrotar a una calavera con fuego; para hacer esto deberas golpearla primero con el gancho y despues la espada.',
        image: require('../../assets/images/172.png')
      },
      {
        id: 'g17',
        text: 'En la siguiente habitacion te tendras que enfrentar a dos esqueletos gigantes alos que debes eliminar golpeandosles con la espada cuando nose cubran con el escudo. Cuando hayas eliminado a estos dos enemigos, aparecera un cofre que contiene una llave.',
        image: require('../../assets/images/173.png')
      },
      {
        id: 'g18',
        text: 'Despues de conseguir la llave, vuelve a la habitacion principal (4 antorchas). En uno de los pasillos veras un bloque de color azul; si te pones a lado y tocas con la Ocarina la cancion del Tiempo, el bloque desaparecera y aparecera una puerta por la que debes de continuar.',
        image: require('../../assets/images/174.png')
      },
      {
        id: 'g19',
        text: 'Cuando pases la puerta, veras un enorme gardin. Para resolver este quest, deberas de subir por el muro de lado derecho (casi en la cima se encuentra una skulltula dorada). Llegaras a una puerta que te lleva a la planta 1.',
        image: require('../../assets/images/175.png')
      },
      {
        id: 'g20',
        text: 'Cuando llegues a esa habitacion, debes de eliminar la calavera de fuego para que aparezca el cofre que contiene el Mapa. De ahi se abrira una reja que protegia una puerta.',
        image: require('../../assets/images/176.png')
      },
      {
        id: 'g21',
        text: 'Dicha puerta te llevara a un balcon, y una vez ahi usa el gancho para agarrarte a una diana que esta sobre el balcon de a lado. En ese balcon se encuentra un interrupor rojo, que cuando lo presionas se drena el agua del pozo (esta en el jardin)',
        image: require('../../assets/images/177.png')
      },
      {
        id: 'g22',
        text: 'Salta del balcon y metete en el pozo para encontrar el cofre que contiene otra llave. Cuando tengas la llave sal del pozo y vuelve a la habitacion princial (la puerta que esta a lado del pozo)',
        image: require('../../assets/images/178.png')
      },
      {
        id: 'g23',
        text: 'Ya en la habitacion principal, entra por la puerta del lado izquierdo que tiene cerradura (cerca de donde estaba el bloque azul). Entrando hay una Skulltula gigante que puedes destruir usando el gancho y en la segunda habitacion veras una calavera de fuego y una escalera. Al subir por la escalera llegaras a una habitacion con un bloque gris y unas flechas en el suelo. Lo que se debe de hacer aqui es mover el bloque en direccion a las flechas para que entre en un agujero (tomalo pulsando A). Una vez en el agujero deberas subir a el, para llegar al siguiente piso. De momento aun no subas por el, ya que deberas subir por las escaleras donde incialmente estaba ese bloque gris.',
        image: require('../../assets/images/179.png')
      },
      {
        id: 'g24',
        text: 'Ya arriba veras un bloque cafe que tienes que empujar hasta que toque con la pared del fondo. Despues vuelve a bajar y subor por el bloque que tiraste en el hoyo para poder seguir empujando el bloque cafe hasta que caiga en otro hoyo. ',
        image: require('../../assets/images/180.png')
      },
      {
        id: 'g25',
        text: 'Subete en el bloque y llegaras a un lugar donde hay una escalera que te lleva a una habitacion en la que hay dos calaveras y una puerta cerrada sobre la que hay un ojo. Abre la puera con una de las llaves que llevas y llegaras a un pasillo torcido.',
        image: require('../../assets/images/181.png')
      },
      {
        id: 'g26',
        text: 'Al pasar el pasillo torcido llegaras a una habitacion en la que hay plataformas y una puerta con cerradura (Navi te avisara que hay una sombra de una mano que cae de vez en cuando, si te llega a tocar te regresara al inicio del templo). Cuando entres por la puerta con cerradura llegaras a una habitacion en la que hay varias escaleras que bajan y en la parte inferiror encontraras una puerta por la que debes continuar.',
        image: require('../../assets/images/182.png')
      },
      {
        id: 'g27',
        text: 'Esa puerta te lleva a una habitacion en la que hay un esqueleto y un hoyo en el centro. Cuando elimines al esqueleto, veras que baja una plataforma en la que hay dos esqueletos mas. A estos dos esqueletos tambien los tienes que eliminar para que aparezzaca un cofe grande que contiene el Arco de las Hadas (Elimina rapidamente a los esqueles porque si tardas mucho en hacerlo, recucitan).',
        image: require('../../assets/images/183.png')
      },
      {
        id: 'g28',
        text: 'Ya una vez con el arco, tienes que volver a la habitacion anterior, Alli tienes que disparar flechas a los tres cuadros que tienen fantasmas, pero lo tendras que hacer desde lejos, ya que si te acercas, los fantasmas desaparecen y aparecen en otro cuadro.',
        image: require('../../assets/images/184.png')
      },
      {
        id: 'g29',
        text: 'Cuando destruyes a los tres fantasmas en los cuadros, aparecera un fantasma con una antorcha naranja y tendras que nfrentar a el en la parte inferior de la habitacion. Para destruirlo, fija el blanco (L), y despues dispara con el arco o el gancho cuando sea visible (x5). Despues de eliminarlo, se encendera una antorcha apagada que estaba junto a una puerta y aparecera un cofre que contiene una llave.',
        image: require('../../assets/images/185.png')
      },
      {
        id: 'g30',
        text: 'Vuelve a la habitacion donde conseguiste el arco y metete por la puerta de salida para llegar a otra habitacion que tendras que disparar flechas desde lejos a los tres cuadros fantasma. Al disparar a los cuadros, aparecera el fantasma de la antorcha azul. Eliminalo de la misma forma que al fantasma de la antorcha naranja. Aparecera un cofre que contiene la brujula.',
        image: require('../../assets/images/186.png')
      },
      {
        id: 'g31',
        text: 'Despues, entra por la puerta con cerradura que encuentras subiendo las escaleras. Por esta puerta llegaras a una habitacion con plataformas en la que de vez en cuando aparece la sombre de una mano. Aqui tiene que entrar por la unica puerta que veas y llegaras a un pasillo en el que hay una calavera con fuego y una puerta con cerradura para la que NO tienes llave.',
        image: require('../../assets/images/187.png')
      },
      {
        id: 'g32',
        text: 'Como no tienes aun la llave, vuelve a la habitacion en la que habia un ojo encima de una puerta (esta en el pasillo torcido). En esta habitacion dispara una flecha al ojo y en la habitacion siguiente el pasillo torcido se pondra recto.',
        image: require('../../assets/images/188.png')
      },
      {
        id: 'g33',
        text: 'Cuando pases el pasillo que se ha enderezado, llegaras a una habitacion en la que las plataformas han cambiado. En esta habitacion veras que ahora hay un cofre amarillo y azul en el suelo. Dentro de ese encontraras la gran llave, con la que podras abrir la puerta del jefe de la mazmorra.',
        image: require('../../assets/images/189.png')
      },
      {
        id: 'g34',
        text: 'Entra por el hoyo que esta a lado de ese cofre y caeras en la planta 0. Ya ahi, tendras que eliminar a dos calaveras con fuego para que desaparezcan las rejas de una puerta. Entra por la puerta y apareceras en una plataforma que hay en el exterior (veras la 4ta skulltula dorada). En la plataforma hay dos puertas, por la puerta cafe llegaras a una habitacion donde hay una mano, cuando la elimines, aparecera un cofre con una llave (cada que golpees la mano, saldras mas manos)',
        image: require('../../assets/images/190.png')
      },
      {
        id: 'g35',
        text: 'Cuando tengas la llave, sal de esa habitacion y entra por la puerta de colores, te llevara al principio de la habitacion de los bloques. Desde este punto tienes que avanzar para volver al pasillo donde anteriormente encontraste una puerta con cerradura. Primero seguir el patron de los BLOQUES una vez que pases la puerta: AZUL, CAFE. pasa la habitacion donde estaba el ojo sobre la puerta (dispara al ojo). Despues pasa las habitaciones donde disparaste a los cuadros y por fin llegaras a la puerta con llave. ',
        image: require('../../assets/images/191.png')
      },
      {
        id: 'g36',
        text: 'Al abrir la puerta, llegaras a una habitacion en la que hay plataformas que van firando alrededor de una antorcha y en la pared veras un ojo rodeado de hielo. Para poder activar el ojo, tienes que disparar una flecha que atraviese el fuego y que despues le de al ojo. De esta manera,el hielo se derretira y el pasillo de la habitacion anterior se torcera.',
        image: require('../../assets/images/192.png')
      },
      {
        id: 'g37',
        text: 'Despues de esto, sal de esta habitacion y cruza el pasillo que ahora estara torcido. En la siguiente habitacion podras observar que las plataformas han cambiado. Lo que tienes que hacer ahora es ir hasta la parte inferior',
        image: require('../../assets/images/193.png')
      },
      {
        id: 'g38',
        text: 'AL dejarte caer por el hoyo, llegaras a una habitacion en la que el suelo esta formado por baldosas blancas y negras. Alli tienes que llegar a la puerta que esta en el otro extremo, pero deberas tener cuidado ya que el techo comenzara a caer e intentara aplastarte (cada que el techo caiga veras unos hoyos donde te deberas de colocar para que no te pegue). Para que las rejas que cubren la puerta desaparezcan, debes pisar un boton que esta mas o menos en el centro de la habitacion (tambien hay un cofre que contiene flechas).',
        image: require('../../assets/images/194.png')
      },
      {
        id: 'g39',
        text: 'En la siguiente habitacion veras que hay un cuadro de un fantasma, y si le disparas una flecha caeran unos bloques con los que tienes que formar un rompecabezas a contra tiempo. De las 5 pizas que caen, solo debes usar 4 y el dibujo que debes formar es el del fantasma.',
        image: require('../../assets/images/195.png')
      },
      {
        id: 'g40',
        text: 'Cuando formes el rompecabezas aparecera el fantasma de la antorcha verde, eliminalo de la misma forma que al azul y naranja. Una vez eliminado se encendrera la antorcha verde y la reja de la puerta desaparecera para que puedas continuar.',
        image: require('../../assets/images/196.png')
      },
      {
        id: 'g41',
        text: 'Dentro de la puerta, llegaras a una habitacion en la que hay una gran Skulltula que tienes que eliminar (Usa el gancho). Despues entra por la puerta del fondo y llegaras a la habitacion princiapl ',
        image: require('../../assets/images/197.png')
      },
      {
        id: 'g42',
        text: 'Al acercarte al fantasme, deberas eliminarlo. El fantasma se divide en 4 y tendras que golpear al verdadero con 5 flechas o con el gancho. Para saber cual es el verdadero, tienes que fijarte en el momento en el que aparecen, ya que el verdadero es el unico que da una vuelta sobre si mismo.',
        image: require('../../assets/images/198.png')
      },
      {
        id: 'g43',
        text: 'Cuando lo derrotes, se encendera la cuarta antorha y en el centro aparecera un ascensor que te llevara a la una planta inferios (B2).',
        image: require('../../assets/images/199.png')
      },
      {
        id: 'g44',
        text: 'En esa habitracion veras que en la pared hay dos muros y dos hoyos. Los muros los tienes que empujar de forma que gire la habitacion para que los hoyos coincidand con unos pasillos.',
        image: require('../../assets/images/200.png')
      },
      {
        id: 'g45',
        text: 'En dichos pasillos hay 3 botos que tienes que presionar para que desaparezcan dos rejas (tambien hay un pasillo en el que hay un cofre que contiene flechas y la 5ta skulltula dorada).',
        image: require('../../assets/images/201.png')
      },
      {
        id: 'g46',
        text: 'Cuando las rejas desaparezcan, continua empujando el muro hasta que uno de los hoyos coincida con el pasillo que te lleva a la habitacion donde esta la puerta del Jefe Final.',
        image: require('../../assets/images/202.png')
      },
      {
        id: 'g47',
        text: 'Esa puerta solo la podras abrir, si anteriormente tomaste la Gran Llave. Despues de abrir la puerta llegaras a la habitacion donde se desarrollara la batalla con el enemigo final. GANON FANTASMA.',
        image: require('../../assets/images/203.png')
      },
      {
        id: 'g48',
        text: 'La batalla se centra en una habitacion llena de cuadros. Para derrotar al fantasma de Ganons; en dos de los cuadrso veras como aparece Ganon cabalgando hacia ti, uno es verdadero y el otro falso. El verdadero saldra del cuadro entre una nubes y el falso dara la vuelta y retrocedera.',
        image: require('../../assets/images/204.png')
      },
      {
        id: 'g49',
        text: 'Justo cuando el verdadero salga tienes que dispararle una flecha o usar el gancho. Este paso lo tienes que hacer 3 veces. Despues de esto Ganon se bajara del caballo y empezara a levitar en el centro de la habitacion.',
        image: require('../../assets/images/205.png')
      },
      {
        id: 'g50',
        text: 'Ya ahi, comenzara a lanzarte una bola de energia que tendras que devolverle golpeandola con la espada (hay veces que Ganon la vuelve a golpear hacia ti)',
        image: require('../../assets/images/206.png')
      },
      {
        id: 'g51',
        text: 'Cuando la bola de energia le de, Ganon caera al suelo y tendras que aprovechar para golpearlo con la espada. Este ataque lo tienes que hacer 3 veces como minimo.',
        image: require('../../assets/images/207.png')
      },
      {
        id: 'g52',
        text: 'Despues de derrotar al fantasma de Ganon, aparecera un contenedor de corazon y un haz de luz que te lleva a la sala de los Sabios, lugar en el que aparecera Saria, y te dara el Medallon del Bosque.',
        image: require('../../assets/images/208.png')
      },

    ]

  },
  {
    id: 'adult_2',
    title: 'Templo del Fuego',
    location: 'Crater de la Montaña de la Muerte',
    era: 'Adulto',
    requirements: 'Tunica Goron + Gancho',
    keyItems: ['Tunica Goron', 'Martillo Megaton'],
    steps: [
      {
        id: 't1',
        text: 'Despues de completar el templo delbosque, apareceras delante del gran arbol Deku, Lugar donde veras que ha nacido un nuevo brote',
        image: require('../../assets/images/209.png')
      },
      {
        id: 't2',
        text: 'Tras conseguir el medallon del bosque, deberas ir al Templo del Fuego, pero antes tienes que conseguir el Sayo Goron para que no te afecte el calor. Para ello ve a Kakariko y sube por el camino de la izquierda para llegar a la montana. Despues sube por el sendero de la Montana de la muerte hasta llegara la Ciudad Goron.',
        image: require('../../assets/images/210.png')
      },
      {
        id: 't3',
        text: 'Ya en la ciudad, veras que hay un goron que esta rodando continuamente. Lo tienes que parar poniendole una bomba.',
        image: require('../../assets/images/211.png')
      },
      {
        id: 't4',
        text: 'Para lograr esto tendras que calcular cuando va a pasar el goron para que la bomba explote en el momento en el que pasa.',
        image: require('../../assets/images/212.png')
      },
      {
        id: 't5',
        text: 'Cuando se pare, habla con el y te dira que es el hijo de Darunia y que su padre esta en el interior del Templo del fuego.(Este goron tendra el mismo nombre que tu)',
        image: require('../../assets/images/213.png')
      },
      {
        id: 't6',
        text: 'Cuando termines de hablar con el, le trendras que hacer dos pregunta y despues de contestarlas te dara el Sayo Goron.',
        image: require('../../assets/images/214.png')
      },
      {
        id: 't7',
        text: 'Tambien abriras dos puertas, La tienda Goron y la habitacion de Darunia (planta baja).',
        image: require('../../assets/images/215.png')
      },
      {
        id: 't8',
        text: 'Ve a planta de abajo y entra en la habitacion de Darunia y tira de la estatua de la pared del fondo. Al moverla, aparecera una puerta que te lleva al interior del Crater de la Montana de la Muerte',
        image: require('../../assets/images/216.png')
      },
      {
        id: 't9',
        text: 'Cuando entres al Crater, tendras que usar el Sayo Goron, ya que sino lo haces aparecera un marcador de tiempo y cuando llegue a 0 moriras.',
        image: require('../../assets/images/217.png')
      },
      {
        id: 't10',
        text: 'Dentro del Crater tienes que cruzar el puente de madera roto usando el gancho en el tronco que esta encima del puente.',
        image: require('../../assets/images/218.png')
      },
      {
        id: 't11',
        text: 'Cuando cruces el puente aparecera Sheik y te mostrara la cancion Bolero de Fuego. Al tocar esta cancion con la ocarina volveras directamente a este punto.',
        image: require('../../assets/images/219.png')
      },
      {
        id: 't12',
        text: 'Despues de aprender la cancion, metete por la puerta que esta a la izquierda y bajando por el agujero del centro llegaras al interir del Tempo del Fuego.',
        image: require('../../assets/images/220.png')
      },
      {
        id: 't13',
        text: 'Una vez que aprendas la cancion, entra por la puerta de la izquierda y baja las escaleras, ahi veras la puerta al templo.',
        image: require('../../assets/images/221.png')
      },
      {
        id: 't14',
        text: 'En la primera habitacion del Templo veras 3 puertas. La puerta de la izquierda de la escalera (aun no subas) contiene un cofre con la llave maestra, pero aun no llegaras a ella por que hay una reja que lo impide. Subiendo la escalera encontrara otras dos puertas, una tiene cerradura (derecha) y la otra normal (izquierda). Entra por ahi y podras encontrar a Darunia, delante de la puerta del jefe final. Al hablar con el te pedira que rescates a todos los goron que estan encerrados en las celdas.',
        image: require('../../assets/images/222.png')
      },
      {
        id: 't15',
        text: 'Salta por las plataformas que estan a la izquierda y llegaras a un lugar que hay una celda cerrada y un boton en el suelo. Presionalo y la celda se abrira. Dentro encontraras un goron que te dara una puesta y un cofre que contiene una llave.',
        image: require('../../assets/images/223.png')
      },
      {
        id: 't16',
        text: 'Cuando tengas la llave, vuelve a la habitacion anterior y entra por la puerta que tenia cerradura para llegar a la otra habitacion mas grande que tiene lava (Es la puerta que hay enfrente de donde sales a la habitacion principal).',
        image: require('../../assets/images/224.png')
      },
      {
        id: 't17',
        text: 'Luego ve a la pared de la derecha de esta habitacion saltando sobre las plataformas que hay sobre la lava y veras las silueta de una puerta. Pon una bomba al lado y aparecera una puerta que te lleva a una habitacion en la que hay una reja y un boton.',
        image: require('../../assets/images/225.png')
      },
      {
        id: 't18',
        text: 'Presionalo y la reja se abrira. Dentro encontrara a otro goron y otro cofre que contiene una llave. Si despues vas a la pared izquierda  de la habitacion anterior, encontraras otra puerta que te lleva a la otra habitacion en la que hau una reja y un boton. Presionala y la reja abrira y dentro encontraras otro goron con un cofre que contiene otra llave.',
        image: require('../../assets/images/226.png')
      },
      {
        id: 't19',
        text: 'Sal de esa habitacion y justo encima de la puerta veras que hay un bloque azul, Si pulsas L veras que en el bloque salen unas flechas, Toca la ocarina la cancion del Tiempo para que el bloque caiga al suelo y podras subirte en el para llegar a una puerta que hay arriba.',
        image: require('../../assets/images/227.png')
      },
      {
        id: 't20',
        text: 'Por esa puerta llegaras a una habitacion en la que las baldosas se lanzan contra ti (ahi veras la 1ra skulltula dorada). Despues, sal de esa habitacion y entra por la puerta con cerradura que esta al otro lado del puente de madera para llegarr a una habitacion en la que hay dos columnas y una reja metalica.',
        image: require('../../assets/images/228.png')
      },
      {
        id: 't21',
        text: 'En esta habitacion tienes que trepar por la reja para poder llegar a la parte de arriba de la columna de la derecha. Cuando estes sobre la columna, empuja el bloque que hay sobre ella para que caiga encima del hoyo de lava que hay a lado (el bloque lo tienes que empujar hacia la otra columna).',
        image: require('../../assets/images/229.png')
      },
      {
        id: 't22',
        text: 'Cuando el bloque este en el suelo, sube sobre el y cuando salga el chorro de lava del agujero, el bloque subira y te llevara a la planta superior.',
        image: require('../../assets/images/230.png')
      },
      {
        id: 't23',
        text: 'Despues de subir con el bloque, llegaras a una habitacion en la que hay una puerta con cerradura que te lleva a una habitacion en la que hay una reja que encierra un goron, un boton con forma de rombo y un bloque cafe muy grande. Lo primero que debes hacer es saltar por las plataformas para llegar al lado del interruptor con forma de rombo (esta detras del bloque cafe). Despues empuja el bloque cafe para tirarlo al suelo y cuando este abajo, tira de el para ponerlo sobre la baldosa con dibujo.',
        image: require('../../assets/images/231.png')
      },
      {
        id: 't24',
        text: 'Despues, sube por el bloque y desde aqui salta para agarrarte a una reja que hay en la pared de a lado. Subiendo por la reja llegaras al punto mas alto de la habitacion, donde veras una reja rodeada por fuego. Para poder subir, tira una bombo desde el boder de esta plataforma para que caiga al lado del boton con forma de rombo y cuando la bomba explote, el boton se activara y el fuego desaparecera.',
        image: require('../../assets/images/232.png')
      },
      {
        id: 't25',
        text: 'Cuando el fuego desaparezca, sube rápidamente por la reja antes de que vuelva a aparecer el fuego y llegarás a una plataforma en la que hay una puerta (planta P2). Por esa puerta llegarás a un laberinto por el que ruedan piedras gigantes y verás la habitación desde un punto de vista superior(en esta habitación sólo encontrarás la 2.ª skulltula dorada). En el laberinto, ve hacia el lado izquierdo según apareces, pegado a la pared y verás una puerta que te lleva a una habitación en la que hay una reja y un interruptor. Al pisar el interruptor, la reja se abrirá y dentro encontrarás a un goron y un cofre que contiene una llave pequeña',
        image: require('../../assets/images/233.png')
      },
      {
        id: 't26',
        text: 'En otra de las paredes hay otra reja y otro interruptor (está a la derecha según entras en esta habitación). Al pisar el interruptor, la reja se abrirá y dentro encontrarás a otro goron y un cofre que contiene otra llave pequeña.',
        image: require('../../assets/images/234.png')
      },
      {
        id: 't27',
        text: 'Si sigues avanzando pegado a la pared, encontrarás una puerta con cerradura, y al meterte por ella llegarás a una habitación en la que hay una puerta con cerradura, una puerta con rejas y un ojo abierto en la parte de arriba de la pared.',
        image: require('../../assets/images/235.png')
      },
      {
        id: 't28',
        text: 'Dispara una flecha al ojo para que la reja de la puerta de la derecha desaparezca y después métete por ella para encontrar un cofre grande que contiene el Mapa de la mazmorra.',
        image: require('../../assets/images/236.png')
      },
      {
        id: 't29',
        text: 'A continuación, sal de esta habitación y métete por la puerta con cerradura para llegar a una habitación muy grande en la que tienes que caminar sobre una reja que hay en el suelo (al pisar la plataforma te seguirá una llama de fuego). Avanza hasta el fondo a la derecha y subiendo por las plataformas llegarás a una puerta que te lleva a la parte de arriba del laberinto.',
        image: require('../../assets/images/237.png')
      },
      {
        id: 't30',
        text: 'Salta a la plataforma de al lado y verás que hay una grieta sobre la que tienes que poner una bomba para que se haga un agujero que te lleva a la celda de un goron (es la celda que viste en la habitación en la que había un interruptor de rombo y un bloque marrón). Al pisar el interruptor, se abrirá la celda y dentro encontrarás al goron y un cofre que contiene una llave pequeña.',
        image: require('../../assets/images/238.png')
      },
      {
        id: 't31',
        text: 'Tras coger la llave, trepa por la reja de la pared para llegar de nuevo a la parte de arriba del laberinto. Sobre otra de las plataformas del laberinto verás un interruptor que al pulsarlo hace que se abra una reja que hay en la pared contraria (el interruptor está en una plataforma cercana a donde pusiste la bomba en la grieta). Tras la reja encontrarás a un goron y un cofre que contiene una llave pequeña. Cuando tengas la llave, salta para caer en la parte de abajo del laberinto y métete de nuevo por la puerta que tenía cerradura (está al lado de una puerta que está elevada). Tras meterte por ella llegarás a otra habitación en la que te tienes que meter por la puerta que tienes enfrente de donde has entrado para llegar de nuevo a la habitación en la que caminabas por una reja que estaba sobre la lava.  ',
        image: require('../../assets/images/239.png')
      },
      {
        id: 't32',
        text: 'Avanza y métete por la puerta con cerradura que está en la pared de la izquierda (para llegar a la puerta tienes que saltar desde la reja más cercana). Dicha puerta te llevará a una habitación muy grande en la que hay llamas de fuego que dan vueltas y bolas gigantes que ruedan (en algunos lugares de esta sala aparecen cortinas de fuego al acercarte a algunos postes, pero siempre hay camino para poder avanzar).',
        image: require('../../assets/images/240.png')
      },
      {
        id: 't33',
        text: 'Por la puerta que hay en la pared exterior del lado derecho llegarás a una habitación en la que hay un cofre grande que contiene la brújula. Vuelve a la sala anterior y métete por la puerta con cerradura que está en la torre del centro para llegar a un pasillo en el que hay una celda con un goron dentro. Esa celda no la podrás abrir de momento ya que no hay ningún interruptor.',
        image: require('../../assets/images/241.png')
      },
      {
        id: 't34',
        text: 'A continuación, métete por la puerta que está al otro lado del pasillo y llegarás al otro lado de la gran habitación. Allí tienes que avanzar para llegar a una de las esquinas en la que hay un interruptor (lo verás nada más salir por esta puerta. pero para llegar hasta él tendrás que buscar un camino donde no aparezcan las cortinas de fuego). Al pisarlo, desaparecerá una gran cortina de fuego que te impedía llegar a una puerta que está casi al lado.',
        image: require('../../assets/images/242.png')
      },
      {
        id: 't35',
        text: 'Cuando intentes abrir esa puerta verás que es falsa. Lo que tienes que hacer es destruirla con una bomba para que aparezca la puerta verdadera, y al meterte por ella llegarás a una habitación en la que te encontrarás con un enemigo intermedio "Bailafuego".',
        image: require('../../assets/images/243.png')
      },
      {
        id: 't37',
        text: 'Para derrotar a este enemigo fija el blanco en la bola negra del centro del cuerpo manteniendo el botón "L" pulsado y después usa el gancho para apartarla del fuego. Cuando la hayas separado, la tendrás que golpear con la espada (lo tienes que hacer 3 veces). Cuando lo elimines, sube sobre la plataforma que está en el centro de la habitación y esta se elevará y te dejará en la planta superior (planta P3). La plataforma te dejará en una habitación en la que hay una puerta por la que debes continuar para llegar a una habitación en la que hay un interruptor con forma de rombo y una reja rodeada de fuego. Desde la plataforma donde está la reja de fuego tienes que tirar una bomba para activar el interruptor y entonces el fuego desaparecerá. Así podrás subir rápidamente por la reja para llegar a la puerta que está arriba del todo (planta P4).',
        image: require('../../assets/images/245.png')
      },
      {
        id: 't38',
        text: 'En esta habitación verás un cofre grande que está rodeado de fuego. Para que el fuego desaparezca tienes que pisar un interruptor que está al lado de la entrada y después tienes que ir corriendo hacia el cofre antes de que el fuego vuelva a aparecer (el interruptor que tienes que pisar es el que está al principio del camino estrecho, no la plataforma cuadrada que hay al lado).',
        image: require('../../assets/images/246.png')
      },
      {
        id: 't39',
        text: 'Dentro del cofre encontrarás el Martillo Megatón.',
        image: require('../../assets/images/247.png')
      },
      {
        id: 't40',
        text: 'A continuación, vete al lado de la puerta por la que has entrado a esta habitación y verás que hay una plataforma cuadrada que cuando la pisas se hunde un poco. Dale un golpe a la plataforma usando el martillo que acabas de conseguir y así aparecerá un agujero por el que te tienes que tirar para caer en la planta inferior (P3).',
        image: require('../../assets/images/248.png')
      },
      {
        id: 't41',
        text: 'Tras tirarte por el agujero caerás en una habitación en la que hay dos bloques con llamas dibujadas que ocultan una puerta. Para poder meterte por esa por la puerta tienes que golpear los bloques con el Martillo Megatón.',
        image: require('../../assets/images/249.png')
      },
      {
        id: 't42',
        text: 'En la siguiente habitación encontrarás dos cajas de madera y un agujero rectangular muy grande. Entre las antorchas que hay al principio del agujero verás que hay un bloque marrón, y si golpeas su zona superior con el Martillo Megatón, verás como en el agujero aparecen unos escalones para que puedas bajar',
        image: require('../../assets/images/250.png')
      },
      {
        id: 't43',
        text: 'Al bajar las escaleras encontrarás un interruptor en el suelo y una puerta con rejas. Pon sobre el interruptor una de las cajas y de esta forma la puerta se mantendrá abierta.',
        image: require('../../assets/images/251.png')
      },
      {
        id: 't44',
        text: 'En la siguiente habitación hay una plataforma cuadrada en el suelo, y si la golpeas con el Martillo Megatón, aparecerá un agujero que te lleva a la planta inferior (P2).Desde el lugar donde apareces al tirarte por el agujero verás que al lado hay una puerta con rejas y un interruptor oxidado. Este interruptor lo tienes que activar golpeándolo con el Martillo Megatón y la reja de la puerta desaparecerá.',
        image: require('../../assets/images/252.png')
      },
      {
        id: 't45',
        text: 'Cuando la reja desaparezca, métete por la puerta y llegarás a una habitación en la que hay un bloque azul sobre la plataforma que está frente a donde tú te encuentras. Mantén pulsado el botón "L" para seleccionar el bloque y después usa la Ocarina para tocar la Canción del tiempo.',
        image: require('../../assets/images/253.png')
      },
      {
        id: 't46',
        text: 'Al tocar la canción, el bloque aparecerá en la parte de abajo y en el lugar donde estaba el bloque inicialmente aparecerá un interruptor oxidado. Si luego lo golpeas con el Martillo Megatón, se abrirá la reja de la celda que está en la parte de abajo del pasillo. Dentro de la reja encontrarás a otro goron y un cofre que contiene una llave pequeña.Tras coger la llave, sal de esta habitación por la misma puerta por la que has entrado y verás que hay una plataforma al lado del interruptor oxidado (puedes subir saltando sobre el gran bloque azul). A continuación, salta sobre esa plataforma y golpéala con el Martillo Megatón para que aparezca un agujero que te lleva a la habitación donde viste a Darunia al inicio (es donde estaba la puerta el enemigo final, planta P0).',
        image: require('../../assets/images/254.png')
      },
      {
        id: 't47',
        text: 'Después, sal de esta habitación por la puerta que hay enfrente de la puerta del enemigo final y llegarás a la primera habitación del Templo. En dicha estancia (la primera del templo), baja los peldaños y en el lado derecho de la escalera hay unos bloques con una llama dibujada. Estos bloques los tienes que apartar golpeándolos con el Martillo Megatón en un lado y aparecerá una puerta con cerradura.',
        image: require('../../assets/images/255.png')
      },
      {
        id: 't48',
        text: 'Métete por la puerta con cerradura y llegarás a una habitación en la que hay una puerta que tiene una reja. Para que se abra la reja tienes que eliminar a todos los enemigos. Cuando la reja se abra, métete por la puerta y llegarás a una sala en la que se levantan las baldosas y se lanzan contra ti (en la pared está la 5.ª skulltula dorada).',
        image: require('../../assets/images/256.png')
      },
      {
        id: 't49',
        text: 'Después de esquivar todas las baldosas, métete por la puerta que hay en el otro lado de la habitación y llegarás a una habitación en la que te enfrentarás a un enemigo con forma de llama: "Bailafuego".',
        image: require('../../assets/images/257.png')
      },
      {
        id: 't50',
        text: ' Para derrotar a este enemigo, fija el blanco en la bola negra manteniendo el botón "L" pulsado, y después usa el gancho para apartarla del fuego. Cuando esté apartada, golpéala con la espada (tienes que hacerlo 3 veces). Tras eliminar a este enemigo, aparecerá un cofre que contiene una bomba y además se abrirá una reja que estaba delante de una puerta. A continuación, métete por la puerta que se ha abierto y llegarás a un pasillo en el que hay una celda y un interruptor oxidado. Golpea el interruptor con el Martillo Megatón y la celda se abrirá. Dentro encontrarás un goron y el cofre de la gran llave (es la llave que abre la puerta del jefe de la mazmorra).',
        image: require('../../assets/images/258.png')
      },
      {
        id: 't51',
        text: 'Tras coger la gran llave, sal por la puerta (no por la que has entrado sino por la otra) y llegarás a la habitación principal.',
        image: require('../../assets/images/259.png')
      },
      {
        id: 't52',
        text: 'Allí sube la escalera y métete por la puerta de la izquierda para llegar a la habitación donde está la puerta del jefe. Como tienes la gran llave, la podrás abrir y enfrentarte al Dragón de lava subterráneo "VOLVAGIA".',
        image: require('../../assets/images/260.png')
      },
      {
        id: 't53',
        text: 'Para derrotar al dragón debes esperar a que asome la cabeza por uno de los agujeros de suelo. Cuando lo haga, debes golpearle con el Martillo Megatón para aturdirle, momento que deberás aprovechar para atacarle con la espada o con el Martillo Megatón (este ataque lo tienes que repetir 5 veces).',
        image: require('../../assets/images/261.png')
      },
      {
        id: 't54',
        text: 'Tras este ataque el dragón se ocultará y aparecerá por otro de los agujeros, aunque ahora saldrá completamente y empezará a volar. Cuando está volando te puede atacar de dos maneras diferentes: lanzando una llama de fuego o tirando piedras del techo. Ambos ataques los tienes que esquivar moviéndote continuamente por el escenario (para saber dónde van a caer las piedras debes fijarte en las sombras).',
        image: require('../../assets/images/262.png')
      },
      {
        id: 't55',
        text: 'Tras derrotar a Volvagia aparecerá un contenedor de corazón y un haz de luz que te lleva a la Sala de los Sabios',
        image: require('../../assets/images/263.png')
      },
      {
        id: 't56',
        text: 'Allí aparecerá Darunia, el sabio del fuego, el cual te recompensará con el Medallón del Fuego.',
        image: require('../../assets/images/264.png')
      },

    ]
  },
  {
    id: 'adult_3',
    title: 'Cueva de hielo',
    location: 'Lago Zora',
    era: 'Adulto',
    requirements: 'Fuego azul',
    keyItems: ['Fuego azul'],
    steps: [
     {
        id: 'p1',
        text: 'Después de completar el Templo del Fuego aparecerás en el cráter de la Montaña de la Muerte.',
        image: require('../../assets/images/265.png')
      },
      {
        id: 'p',
        text: 'A continuación, sal del cráter y baja por el sendero de la Montaña de la Muerte para legar a Kakariko. Luego sal del pueblo y ve a la izquierda para llegar al Río de Zora (para llegar a la cueva de entrada a esta zona debes meterte en el río para cruzar a la orilla de la izquierda).',
        image: require('../../assets/images/266.png')
      },
      {
        id: 'p',
        text: 'En el río, cruza a la orilla de la derecha saltando por la parte estrecha donde no hay hierba.',
        image: require('../../assets/images/267.png')
      },
      {
        id: 'p',
        text: 'Un poco más adelante tendrás que volver a cruzar a la orilla de la izquierda para poder continuar hasta la catarata que está al final del camino.',
        image: require('../../assets/images/268.png')
      },
      {
        id: 'p',
        text: 'Cuando estés delante de la catarata verás que hay un símbolo de la trifuerza en el suelo. Si te pones sobre el símbolo y tocas la Nana de Zelda, la catarata se parará y aparecerá la puerta de entrada a la región de los zora. ',
        image: require('../../assets/images/269.png')
      },
      {
        id: 'p',
        text: 'Cuando entres en la región de los zora verás que todo está helado. Tienes que avanzar hasta el final del pasillo para llegar a la habitación del rey Zora y descubrirás que se encuentra dentro de una capa de hielo de color rojo.',
        image: require('../../assets/images/270.png')
      },
      {
        id: 'p',
        text: 'A continuación, métete por el pasadizo que está al lado del rey para llegar a la Fuente de Zora, donde anteriormente estaba Jabu-Jabu.',
        image: require('../../assets/images/271.png')
      },
      {
        id: 'p',
        text: 'Verás que Jabu-Jabu ya no está y en su lugar encontrarás unas plataformas de hielo flotando en el agua. Salta sobre estas plataformas para llegar a una cueva que está en el lado izquierdo. Esa cueva es la entrada de la Caverna de hielo.',
        image: require('../../assets/images/272.png')
      },
      {
        id: 'p',
        text: 'Al entrar en la Caverna de hielo tienes que avanzar por el único camino existente hasta llegar a una habitación en la que hay una especie de cuchilla móvil con pinchos y unos enemigos de hielo que soplan.',
        image: require('../../assets/images/273.png')
      },
      {
        id: 'p',
        text: 'En esta misma habitación hay una puerta que tiene delante una reja, y para que se abra tienes que eliminar a los cuatro enemigos de hielo golpeándoles con la espada varias veces. Cuando la reja se abra, métete por la puerta y más adelante encontrarás una habitación en la que hay rupias plateadas y una gran hélice en el centro (en una de las paredes encontrarás la 1.ª skulltula dorada).',
        image: require('../../assets/images/274.png')
      },
      {
        id: 'p',
        text: 'Al coger las cinco rupias plateadas se abrirá una reja que está en una zona elavada a la que llegarás saltando sobre las plataformas que están en la pared (una de las rupias está elevada y tendrás que saltar desde una plataforma para poder cogerla, y otra estará detrás de unos pinchos de hielo que debes romper con la espada).',
        image: require('../../assets/images/275.png')
      },
      {
        id: 'p',
        text: 'Detrás de la reja hay un pasillo que te lleva a una habitación en la que hay un pebetero del que sale fuego azul. El fuego azul lo tienes que meter dentro de una botella y lo podrás usar para derretir el hielo rojo (para hacerlo tienes que usar la botella vacía a su lado).',
        image: require('../../assets/images/276.png')
      },
      {
        id: 'p',
        text: 'En esta misma habitación hay un cofre rodeado de hielo rojo. Derrite el hielo que echando sobre él el fuego azul de la botella y así podrás conseguir el Mapa de la mazmorra.',
        image: require('../../assets/images/277.png')
      },
      {
        id: 'p',
        text: 'Luego llena de nuevo la botella con fuego azul y vuelve a la habitación donde estaba la gran hélice. En esta habitación hay dos zonas de hielo rojo en las paredes tras las que hay dos pasillos (para ver los pasillos, tienes que derretir el hielo con el fuego azul de la botella).',
        image: require('../../assets/images/278.png')
      },
      {
        id: 'p',
        text: ' Uno de esos pasillos te lleva a una habitación en la que hay un cofre rodeado de hielo. Derrítelo con el fuego azul y podrás coger la brújula que se encuentra en su interior. En esta habitación también encuentras una pieza de corazón y otro pebetero con fuego azul (en la pared de arriba de donde está la pieza de corazón encontrarás la 2.ª skullltula dorada). Por el otro pasillo llegarás a una habitación en la que hay rupias plateadas, un bloque de hielo que puedes empujar, un pebetero con fuego azul y la 3.ª skullltula dorada.',
        image: require('../../assets/images/279.png')
      },
      {
        id: 'p',
        text: 'En esta habitación tienes que coger las cinco rupias plateadas para que una reja se abra. Para lograrlo puedes empujar la plataforma de hielo para subirte sobre ella, y para derretir el hielo que rodea a una de ellas tienes que usar el fuego azul. Tras coger las cinco rupias se abrirá la reja y podrás llegar hasta ella empujando la plataforma de hielo hacia la izquierda (desde su sitio inicial). Después empújala hacia la pared donde está el fuego azul, luego hacia la pared donde estaba la rupia rodeada de hielo. A continuación, empújala hacia la pared donde está la puerta por la que has entrado y por último hacia la pared donde se ha abierto la reja.',
        image: require('../../assets/images/280.png')
      },
      {
        id: 'p',
        text: 'Si la plataforma se queda en algún lugar encajada, debes empujarla hacia uno de los agujeros de las esquinas de la habitación para que desaparezca y vuelva a aparecer en el sitio donde estaba inicialmente. Cuando la plataforma de hielo esté debajo del pasillo donde estaba la reja, súbete sobre ella para llegar hasta el pasillo. Al final del pasillo te encontrarás con hielo rojo que protege la puerta de salida y tendrás que derretirlo usando el fuego azul de la botella. Cuando lo hayas hecho, métete por la puerta y llegarás a una habitación en la que te enfrentarás a un Lobo Blanco (Wolfo blanco). Le puedes derrotar golpeándole con la espada o con flechas y le puedes paralizar usando el gancho.',
        image: require('../../assets/images/281.png')
      },
      {
        id: 'p',
        text: 'Cuando derrotes al enemigo aparecerá un cofre que contiene las botas de hierro, y tras abrirlo aparecerá Sheik y te dirá que tienes que ir al Templo de Agua y te enseñará la Serenata del agua (al tocar esta canción, aparecerás directamente en el centro del lago de Hylia).',
        image: require('../../assets/images/282.png')
      },
      {
        id: 'p',
        text: 'A continuación, sal de la Caverna de hielo y vuelve a la habitación del rey Zora.',
        image: require('../../assets/images/284.png')
      },
      {
        id: 'p',
        text: 'Derrite el hielo que lo rodea echando el fuego azul de la botella que previamente tienes que haber llenado en la Caverna de hielo y te recompensará con el sayo zora.',
        image: require('../../assets/images/285.png')
      },
      
    ]
  },
  {
    id: 'adult_4',
    title: 'Templo del Agua',
    location: 'Lago Zora',
    era: 'Adulto',
    requirements: 'Botas de hierro',
    keyItems: ['Botas de hierro', 'Tunica Zora'],
    steps: [
      {
        id: 'p',
        text: 'Para llegar al lago de Hylia tienes que usar la ocarina para tocar la Serenata del agua. Así aparecerás directamente sobre una plataforma que está en el centro del lago.',
        image: require('../../assets/images/286.png')
      },
      {
        id: 'p',
        text: 'Si prefieres ir caminando, tienes que ir al camino que está más al sur de la llanura de Hyrule. Allí te encontrarás unas vallas que solo podrás saltar si ya has conseguido a Epona (la yegua), aunque también podrás subir por una escalera que está en el lado derecho. Tras entrar en el lago de Hylia debes ir a la parte más profunda de la zona central para encontrar una zona con agua.',
        image: require('../../assets/images/287.png')
      },
      {
        id: 'p',
        text: 'En el fondo de la zona de agua verás que hay una puerta cubierta de agua. Para poder llegar a la puerta debes equiparte con el sayo zora, que te permitirá respirar debajo del agua, y con las botas de hierro que te permitirán caminar por el fondo (si no te pones el sayo zora, solo podrás respirar durante un minuto debajo del agua).',
        image: require('../../assets/images/288.png')
      },
      {
        id: 'p',
        text: 'Esta puerta te lleva al interior del Templo del Agua, pero tiene una reja que te impide avanzar. Para que la reja se quite, debes usar el gancho para golpear la especie de diana que está sobre la puerta.',
        image: require('../../assets/images/289.png')
      },
      {
        id: 'p',
        text: 'Al entrar en el templo aparecerás sumergido en el agua (planta P1). Para salir a flote, tienes que quitarte las botas de hierro y llegarás a la superficie, donde verás una torre en el centro de la habitación (planta P2).',
        image: require('../../assets/images/290.png')
      },
      {
        id: 'p',
        text: 'A continuación, tienes que ponerte otra vez las botas de hierro para tirarte al agua y hundirte hasta el fondo (planta P0). Cuando estés en el fondo, métete por una puerta que tiene al lado dos antorchas apagadas y llegarás a una habitación en la que te encontrarás con Ruto (la princesa Zora). Ruto te dirá que hay tres lugares en los que puedes cambiar el nivel del agua.',
        image: require('../../assets/images/291.png')
      },
      {
        id: 'p',
        text: 'Tras hablar con Ruto te dirá que la sigas, así que quítate las botas de hierro para llegar a la superficie (en esta habitación hay un agujero en el techo). Al llegar a la superficie (planta P2) verás una puerta y un símbolo de la Trifuerza en la pared. Toca la Nana de Zelda al lado de la Trifuerza y el nivel del agua bajará del todo.',
        image: require('../../assets/images/292.png')
      },
      {
        id: 'p',
        text: 'Tras tocar la canción tendrás que meterte por la puerta que está en esta misma sala y así llegarás a una habitación en la que hay bolas de pinchos. Destrúyelas usando el gancho o la espada y entonces aparecerá un cofre grande que contiene el Mapa de la mazmorra.',
        image: require('../../assets/images/293.png')
      },
      {
        id: 'p',
        text: 'Tras conseguir el mapa, vuelve a la habitación anterior y tírate por el agujero para caer en la habitación donde estaba Ruto. Ahora verás que en esta habitación también ha desaparecido el agua y que hay una puerta con rejas, dos antorchas apagadas y una encendida. Para que se abra la reja tendrás que hacer que todas las antorchas estén encendidas, y para conseguirlo tienes que disparar flechas que atraviesen el fuego de la antorcha encendida y hagan blanco en las antorchas apagadas.',
        image: require('../../assets/images/294.png')
      },
      {
        id: 'p',
        text: 'Cuando las tres antorchas estén encendidas, la reja se abrirá y te podrás meter por la puerta para llegar a una habitación en la que hay tres ostras. Para eliminarlas tendrás que golpearlas con el gancho cuando se abran, y cuando acabes con ellas aparecerá un cofre que contiene una llave pequeña.',
        image: require('../../assets/images/295.png')
      },
      {
        id: 'p',
        text: 'A continuación, vuelve a la habitación donde estaba la torre y en la pared que está enfrente del pasillo por el que sales verás un gran bloque de piedra empotrado en la pared. Empuja el bloque hasta el fondo y caerá en un agujero, dejando a la vista un pasillo vertical que estaba tras él.',
        image: require('../../assets/images/296.png')
      },
      {
        id: 'p',
        text: 'Luego ponte las botas de hierro y métete por el pasillo que ha aparecido al empujar el bloque para llegar a una habitación en la que hay un interruptor con forma de rombo y un agujero en el centro (para llegar a la habitación tendrás que quitarte las botas de hierro al final del pasillo inundado). Al golpear el interruptor, saldrá un chorro de agua en el centro del agujero y podrás saltar sobre él para llegar a la puerta del otro lado de la habitación.',
        image: require('../../assets/images/297.png')
      },
      {
        id: 'p',
        text: 'Esa puerta te llevará a una habitación en la que hay agua que gira alrededor de la habitación. A continuación, ponte las botas de hierro y tírate dentro del agua para llegar al fondo. Allí verás un interruptor dentro de la boca de una serpiente que tendrás que golpear usando el gancho. De esa manera, se abrirá una reja que también está dentro del agua. Para llegar al otro lado de la reja usa el gancho para agarrarte a la diana que hay al lado y, cuando estés allí, quítate las botas de hierro para llegar a la superficie. En la superficie encontrarás una habitación en la que hay un cofre que contiene una llave pequeña.',
        image: require('../../assets/images/298.png')
      },
      {
        id: 'p',
        text: 'Tras coger la llave, sal de esta habitación golpeando al interruptor que hay al lado del cofre para que la reja se vuelva a abrir. Después, vuelve a la habitación donde estaba la torre y métete en su interior pasando por una puerta con cerradura que está en la parte de abajo. Para cruzar de nuevo la habitación donde estaba el agujero del que salió el chorro de agua te tendrás que agarrar con el gancho a una diana que hay al otro lado, y para salir del agua al final tendrás que usar también el gancho sobre la diana que está arriba del pasillo vertical.',
        image: require('../../assets/images/299.png')
      },
      {
        id: 'p',
        text: 'Dentro de la torre tienes que usar el gancho para subir a una plataforma que está un poco más elevada enganchándote en la diana que tiene en un lateral (en la pared que hay un poco más arriba encontrarás la 1.ª skulltula dorada). En dicha plataforma verás el símbolo de la Trifuerza, y si tocas la Nana de Zelda, el nivel del agua subirá hasta la planta P1. A continuación, ponte las botas de hierro y baja a la base de la torre.',
        image: require('../../assets/images/300.png')
      },
      {
        id: 'p',
        text: 'En la base de la torre verás un agujero que te lleva a una habitación en la que hay un interruptor con forma de rombo (sólo verás el agujero del suelo si has subido el nivel del agua). Al golpear el interruptor con el gancho, aparecerán muchos enemigos a los que también eliminarás usando el gancho. Tras derrotarlos, se abrirán dos rejas que hay en el techo. Subiendo por donde se ha abierto la reja llegarás a una habitación en la que hay un cofre que contiene una llave pequeña (no es la reja que está sobre el interruptor, sino la que está en la otra esquina). ',
        image: require('../../assets/images/301.png')
      },
      {
        id: 'p',
        text: 'Después vuelve al interior de la torre y sal al exterior metiéndote por la puerta que está al nivel del agua. Si en la planta P1 te metes por un pasillo en el que hay dos vasijas, llegarás a un lugar en el que hay una diana para engancharte con el gancho. Así llegarás a un lugar en el que hay un cofre grande que contiene la brújula (para abrir el cofre tendrás que golpear un interruptor de rombo con el gancho desde al lado del cofre para no dar tiempo a que aparezca el chorro de agua).',
        image: require('../../assets/images/302.png')
      },
      {
        id: 'p',
        text: 'Después de salir por la puerta que estaba al nivel del agua tendrás que ponerte las botas de hierro para tirarte dentro del agua y llegar al fondo (planta P0). Cuando estés allí avanza para meterte por la puerta que tiene dos antorchas apagadas a los lados y llegarás a la habitación donde te encontraste con Ruto. En esta habitación te tienes que quitar las botas de hierro para llegar a la superficie.',
        image: require('../../assets/images/303.png')
      },
      {
        id: 'p',
        text: 'Al llegar a la superficie (planta P1) verás que en la pared hay una grieta que podrás romper con una bomba. Al poner la bomba se hará un agujero y podrás llegar hasta un cofre que contiene una llave pequeña.',
        image: require('../../assets/images/304.png')
      },
      {
        id: 'p',
        text: 'Tras coger la llave, vuelve a la sala de la torre y sube hasta donde está el nivel del agua (planta P1). A continuación, métete por la única puerta con cerradura que hay en esta planta.',
        image: require('../../assets/images/305.png')
      },
      {
        id: 'p',
        text: 'Al meterte por esa puerta llegarás a una habitación en la que hay un interruptor con forma de rombo y un chorro de agua en el suelo. Lo que tienes que hacer es colocarte sobre el chorro de agua, y golpear al interruptor con el gancho. Al hacerlo, el chorro se hará más grande y te subirá a la planta superior (planta P2).',
        image: require('../../assets/images/306.png')
      },
      {
        id: 'p',
        text: 'En la habitación en la que te deja el chorro de agua hay una puerta que te lleva a un pasillo en el que hay un símbolo de la Trifuerza. Toca la Nana de Zelda a su lado y el nivel del agua subirá hasta la planta P2.',
        image: require('../../assets/images/307.png')
      },
      {
        id: 'p',
        text: 'Cuando el nivel del agua esté en la planta P2, métete por la única puerta con cerradura que hay en esta planta al nivel del agua y llegarás a una habitación en la que hay plataformas que bajan por una catarata.',
        image: require('../../assets/images/308.png')
      },
      {
        id: 'p',
        text: 'En el lado en el que apareces hay dos plataformas (una encima de otra) y te tendrás que subir en la que está más baja. Desde esta plataforma tienes que usar el gancho para agarrarte a las dianas que está al otro lado',
        image: require('../../assets/images/309.png')
      },
      {
        id: 'p',
        text: ' después tendrás que subir rápidamente por las plataformas para llegar a la puerta con cerradura que está arriba del todo (en la pared de la derecha de esta habitación, encontrarás la 2.ª skulltula dorada). Tras la puerta con cerradura hay una habitación en la que hay unas cabezas, agua y un interruptor con forma de rombo.',
        image: require('../../assets/images/310.png')
      },
      {
        id: 'p',
        text: 'Si disparas una flecha o golpeas con el gancho al interruptor, subirán las cabezas y el nivel de agua (cuando suben las cabezas aparecen unas dianas debajo de ellas). A continuación, usa el gancho para agarrarte a la cabeza más cercana. Después de cruzar tendrás que disparar otra flecha al interruptor para que el nivel de agua vuelva a bajar. Seguidamente, engánchate a la diana que está en la pared de enfrente y después de cruzar ve al otro extremo del pasillo. Cuando estés en el otro extremo golpea otra vez el interruptor y cruza a la cabeza de enfrente usando el gancho. Por último, golpea al interruptor para que la cabeza baje, súbete sobre ella y vuelve a disparar al interruptor para que la cabeza suba y te lleve al pasillo superior.',
        image: require('../../assets/images/311.png')
      },
      {
        id: 'p',
        text: 'En el pasillo superior, usa el gancho para pasar al otro lado de los pinchos. Allí te encontrarás con un enemigo que es una especie de gusano llamado Like Like que, si te come, te quitará el escudo y el sayo zora. Para recuperarlos tendrás que eliminarlo antes de salir de esa habitación para que deje tu equipo en el suelo, aunque si no lo coges rápidamente desaparecerá y tendrás que volver a comprarlo. En caso de no recuperar el sayo zora tendrás que volver a hablar con el rey Zora para conseguir otro. Después métete por la puerta para llegar a una zona cubierta en la que hay un árbol en el centro y un edificio con una puerta con rejas al final. Ve primero hasta la puerta para descubrir que no la puedes abrir (cuando Navi te hable debes leer su mensaje), y después ve al árbol que está en el centro para encontrarte con un personaje que es igual a ti pero en sombra: "LINK OSCURO" (si no aparece este enemigo vuelve a la puerta para oír el mensaje de Navi).',
        image: require('../../assets/images/312.png')
      },
      {
        id: 'p',
        text: ' Cuando este enemigo aparezca te tendrás que enfrentar a él. Para derrotarle, tienes que golpearle continuamente con la espada o con el martillo, pero la gran mayoría de las veces se cubrirá o realizará el mismo ataque que tú (es aconsejable darle varios golpes con el martillo y después, cambiar rápidamente a la espada). Acabarás con él cuando consigas golpearle 6 ó 7 veces. Cuando le hayas derrotado, la habitación cambiará de forma y la reja se abrirá. A continuación, métete por la puerta que tenía la reja y llegarás a una habitación en la que hay un cofre grande que contiene el supergancho.',
        image: require('../../assets/images/313.png')
      },
      {
        id: 'p',
        text: 'Tras obtener el supergancho, ponte en la parte de atrás del cofre en el que se encontraba y verás que en el suelo hay un bloque azul con el mismo dibujo que había en el Templo del Tiempo. Fija el blanco manteniendo el "L" pulsado para apuntar al bloque y usa la ocarina para tocar la Canción del tiempo.',
        image: require('../../assets/images/314.png')
      },
      {
        id: 'p',
        text: 'Al tocar la Canción del tiempo, el bloque desaparecerá y aparecerá un agujero por el que te tienes que tirar para caer en un canal con agua con remolinos. Al lado del primer remolino verás la 3.ª skulltula dorada, y para evitar meterte en los remolinos debes hacer un giro por el suelo para escapar de la corriente pulsando el botón "A"). ',
        image: require('../../assets/images/315.png')
      },
      {
        id: 'p',
        text: 'Dentro del canal, ponte las botas de hierro para poder avanzar hasta el final y sube sobre una plataforma que hay debajo de una diana. Desde ese punto verás una reja cerrada y un ojo en la pared (detrás de la reja hay un cofre). Sube sobre la plataforma que está frente al ojo y usa el arco para dispararle una flecha y abrir la reja. Cuando esté abierta, usa el supergancho para agarrarte al cofre que está tras la reja. Dentro del cofre encontrarás una llave pequeña. ',
        image: require('../../assets/images/316.png')
      },
      {
        id: 'p',
        text: 'Tras coger la llave, sigue por el pasillo donde está el cofre y llegarás a la habitación en la que el agua daba vueltas (es donde había una cabeza de serpiente con un interruptor en la boca). Después, sal por la puerta que está en esta habitación y sigue avanzando hasta llegar a la habitación de la torre. Cuando estés allí con el agua subida al máximo, métete en la única entrada de la planta P2 que no tiene diana (es el pasillo que está en la parte derecha del mapa).',
        image: require('../../assets/images/317.png')
      },
      {
        id: 'p',
        text: 'Tras meterte por ese pasillo debes avanzar hasta el fondo y al final te tendrás que tirar dentro del agua con las botas de hierro puestas. Al hacerlo, verás un bloque grande que está empotrado en la pared. Tira de este bloque hasta sacarlo completamente del hueco donde se encuentra y después pon el nivel de agua a la mitad, es decir, que se quede a la altura de la planta P1 (primero lo bajarás en la habitación donde estaba Ruto y después lo tendrás que subir en la señal de la Trifuerza que hay en el interior de la torre).',
        image: require('../../assets/images/318.png')
      },
      {
        id: 'p',
        text: 'Cuando el agua esté a la altura de la planta P1 debes ir al exterior de la torre y, en una de las paredes, verás que hay un pasillo con una reja y debajo hay un ojo. Para que se abra la reja dispara una flecha al ojo y después usa el supergancho sobre la diana que está en la pared del fondo para poder cruzar.',
        image: require('../../assets/images/319.png')
      },
      {
        id: 'p',
        text: 'Al final de este pasillo verás el bloque marrón que moviste anteriormente. Ahora empuja el bloque hacia la pared del fondo y cuando lo hagas verás que a la derecha hay una habitación en la que hay un cofre que contiene una llave pequeña (esta habitación antes no se veía porque estaba detrás del gran bloque).',
        image: require('../../assets/images/320.png')
      },
      {
        id: 'p',
        text: 'Cuando tengas la llave, vuelve a la habitación de la torre y con las botas de hierro puestas y tírate dentro del agua para ir al fondo (planta P0). Luego métete por la puerta que hay al lado de donde están las bolas de pinchos (es una puerta que está donde hay una hondonada) y llegarás a una habitación a la que tienes que subir quitándote las botas de hierro para flotar.',
        image: require('../../assets/images/321.png')
      },
      {
        id: 'p',
        text: 'En esta habitación verás que hay una puerta con cerradura al otro lado de unos pinchos. Para llegar hasta la puerta debes usar supergancho para agarrarte a la diana que hay sobre ella.',
        image: require('../../assets/images/322.png')
      },
      {
        id: 'p',
        text: 'Tras la puerta encontrarás una estancia en la que hay agua y en la esquina hay remolinos. En esta sala te tendrás que meter en el agua para llegar a la puerta que está al otro lado.',
        image: require('../../assets/images/323.png')
      },
      {
        id: 'p',
        text: 'En la siguiente habitación hay agua y unas plataformas en los laterales. Según entres, tírate a las plataformas de la derecha y verás que hay un hueco entre ellas donde hay un interruptor en el fondo. Si desde esta plataforma miras hacia atrás (hacia la entrada), verás que hay una grieta en la pared que se puede romper con bombas, y en la plataforma del otro lado también se puede romper ese trozo de pared aunque no haya grieta.',
        image: require('../../assets/images/324.png')
      },
      {
        id: 'p',
        text: 'Al poner las bombas aparecerá un pasillo que comunica las dos grietas, y en el centro hay un bloque de piedra. Tienes que entrar en el hueco por la entrada que has hecho donde no había grieta en la pared y desde este punto tienes que empujar el bloque hacia el fondo del pasillo. Cuando esté al fondo, sal del pasillo y ve al otro agujero que has hecho. Al principio del agujero verás el bloque que has empujado, y si tiras de él, lo podrás sacar al exterior para tirarlo sobre el interruptor (después de sacarlo del pasillo tendrás que volver al otro hueco para volver a empujar el bloque).',
        image: require('../../assets/images/325.png')
      },
      {
        id: 'p',
        text: 'Al tirar el bloque sobre el interruptor, el nivel del agua de la habitación subirá y podrás llegar a una puerta que estaba sobre una zona elevada (no es la puerta por la que has entrado a esta habitación, sino la que está en la pared de al lado). Tras meterte por la puerta llegarás a una habitación en la que hay un interruptor que hace aparecer tres chorros de agua en un agujero y también abre la reja que está al otro lado de la habitación. Saltando sobre los chorros de agua podrás llegar a la puerta (en el caso de caer al agujero podrás subir agarrándote con el supergancho a la diana).',
        image: require('../../assets/images/326.png')
      },
      {
        id: 'p',
        text: 'Cuando te metas por la puerta, llegarás a un canal por el que discurre agua. Al entrar en el canal, ve hacia la derecha con las botas de hierro puestas y caerás por un agujero que comunica con una habitación en la que hay una puerta con cerradura. En el canal tienes que ir hacia el lugar por donde aparecen las piedras redondas, y para salir al final del pasillo tendrás que quitarte las botas de hierro para flotar (justo encima del agujero por donde salen las rocas encontrarás la 4.ª skulltula dorada). Al meterte por esta puerta llegarás a una habitación en la que hay un cofre amarillo y azul que contiene la gran llave que te permite abrir la puerta del jefe de esta mazmorra y dos vasijas que contienen dos hadas en su interior.',
        image: require('../../assets/images/327.png')
      },
      {
        id: 'p',
        text: 'Tras conseguir la gran llave, vuelve a la torre y sube el agua al nivel más alto de forma que se quede a la altura de la planta P2 (lo subirás metiéndote por la puerta que tiene una plataforma delante en la planta P1. Esta puerta anteriormente tenía cerradura).',
        image: require('../../assets/images/328.png')
      },
      {
        id: 'p',
        text: 'A continuación, ve a la planta P2 y sube a una plataforma en la que hay una estatua con una diana usando el supergancho. Cuando estés en esta plataforma, métete por la puerta.',
        image: require('../../assets/images/329.png')
      },
      {
        id: 'p',
        text: 'En la siguiente habitación verás la puerta que te lleva al jefe, pero antes de llegar a ella tendrás que subir una pendiente en la que hay tres pinchos que se mueven de lado a lado. Para poder subir la pendiente sólo tienes que pulsar el mando hacia arriba teniendo cuidado de que no te den los pinchos (tienes que subir en línea recta con las botas normales. Si Link se escurre es porque no estás subiendo en línea recta).',
        image: require('../../assets/images/330.png')
      },
      {
        id: 'p',
        text: 'Tras meterte por la puerta llegarás a una habitación que tiene agua en la zona central y cuatro plataformas. Al pisar una de las plataformas aparecerá el enemigo final de esta mazmorra: MORPHA.',
        image: require('../../assets/images/331.png')
      },
      {
        id: 'p',
        text: 'Este enemigo es un tentáculo de agua con un núcleo rojo (realmente son dos tentáculos, pero sólo uno de ellos tiene núcleo). Es aconsejable que te pongas siempre pegado a la pared y, desde ese lugar, usar el supergancho para arrancarle el núcleo (previamente tendrás que mantener el blanco fijado en el núcleo manteniendo el botón "L" pulsado). Procura no acercarte mucho cuando los tentáculos salgan del agua, ya que te pueden coger y quitarte bastante energía.',
        image: require('../../assets/images/332.png')
      },
      {
        id: 'p',
        text: 'Cuando le arranques el núcleo, caerá en tierra firme y tendrás que golpearle con la espada. En total le tendrás que dar 10 golpes para poder derrotarle.',
        image: require('../../assets/images/333.png')
      },
      {
        id: 'p',
        text: 'Tras derrotar a Morpha aparecerá un contenedor de corazón y un haz de luz que te lleva a la Sala de los Sabios, lugar en el que aparecerá Ruto, la sabia del agua, y te recompensará con el Medallón del Agua.',
        image: require('../../assets/images/334.png')
      },
    ]
  },
  {
    id: 'adult_5',
    title: 'Templo del Tiempo',
    location: 'Pueblo de Kakariko',
    era: 'Adulto',
    requirements: 'Supergancho + Lente de la Verdad',
    keyItems: ['Guantes de Plata', 'Guantes de Oro', 'Escudo del Espejo', 'Requiem del Espíritu', 'Medallón del Espíritu'],
    steps: [
      {
        id: 'p',
        text: 'Después de completar el Templo del Agua tendrás que volver a Kakariko. Nada más entrar verás que el pueblo está ardiendo. Acércate al pozo y te encontrarás con Sheik.',
        image: require('../../assets/images/335.png')
      },
      {
        id: 'p',
        text: 'Al hablar con Sheik saldrá una sombra del pozo: el espíritu maligno de la sombra, y a continuación, Sheik te enseñará una nueva canción, el Nocturno de la sombra. Cuando Sheik se vaya, entra en el molino que está al detrás del pozo.',
        image: require('../../assets/images/336.png')
      },
      {
        id: 'p',
        text: 'En el interior del molino te encontrarás con un hombre que está tocando un instrumento musical. Habla con él y seguidamente saca la ocarina a su lado. Cuando este hombre vea que tienes una ocarina, te enseñará otra melodía: la Canción de la tormenta.',
        image: require('../../assets/images/337.png')
      },
      {
        id: 'p',
        text: 'A continuación, vuelve Templo del Tiempo para dejar la espada y convertirte de nuevo en niño (puedes volver directamente al templo tocando con la ocarina el Preludio de la luz).',
        image: require('../../assets/images/338.png')
      },
      {
        id: 'p',
        text: 'Siendo Link niño, vuelve de nuevo a Kakariko y entra en el Molino. Cuando estés dentro, acércate al hombre que está en el interior a ponte a su lado para tocar la Canción de las Tormentas. Al hacerlo, verás cómo el agua del pozo de Kakariko desaparece y podrás meterte en su interior.',
        image: require('../../assets/images/339.png')
      },
      {
        id: 'p',
        text: 'Cuando desaparezca el agua del pozo de Kakariko podrás meterte en su interior siendo Link niño.',
        image: require('../../assets/images/340.png')
      },
      {
        id: 'p',
        text: 'Nada más entrar en el pozo aparecerás en un pasillo que al final tiene un agujero por el que te tienes que meter (para meterte. tienes que acercarte al agujero y pulsar el botón "A").',
        image: require('../../assets/images/341.png')
      },
      {
        id: 'p',
        text: ' Este agujero te llevará a un lugar en el que hay una escalera por la que tendrás que bajar para llegar a un pasillo en el que hay una gran araña que podrás eliminar golpeándola por la espalda cuando se dé la vuelta.',
        image: require('../../assets/images/342.png')
      },
      {
        id: 'p',
        text: 'Al final del pasillo te encontrarás con un esqueleto que te comentará algo sobre el ojo de la verdad (tienes que consultar a Navi para que sepa lo que piensa el esqueleto). A continuación, tienes que atravesar la pared que está al fondo del pasillo ya que se trata de una pared falsa. Así llegarás a una gran habitación en la que hay agua en el centro del pasillo y una gran calavera que avanza sin parar.',
        image: require('../../assets/images/343.png')
      },
      {
        id: 'p',
        text: 'En dicha habitación deberás seguir el agua del centro del pasillo hasta llegar a la pared contraria del lugar por donde has entrado, lugar donde verás que en el suelo hay un Símbolo de la Trifuerza. Colócate sobre el símbolo y toca la Nana de Zelda para hacer que el nivel del agua baje.',
        image: require('../../assets/images/344.png')
      },
      {
        id: 'p',
        text: 'Cuando haya bajado el nivel del agua, vuelve a la pared falsa por donde entrase y verás que el agujero que estaba delante de ella no tiene agua. Si te tiras dentro del agujero verás que una de las paredes hay una pequeña entrada (para meterte por la entrada, acércate a ella y pulsa el botón "A").',
        image: require('../../assets/images/345.png')
      },
      {
        id: 'p',
        text: 'Tras entrar por el agujero llegarás a una habitación en la que hay una gran araña, y al fondo hay una puerta que te lleva a una habitación en la que hay cuatro manos blancas que te cogerán de la cabeza si te acercas a ellas',
        image: require('../../assets/images/346.png')
      },
      {
        id: 'p',
        text: 'En esta misma habitación (la de las manos blancas), verás que de vez en cuando aparece un enemigo blanco: Mano muerta.',
        image: require('../../assets/images/347.png')
      },
      {
        id: 'p',
        text: 'Para eliminar a dicho enemigo tienes que golpearle continuamente con la espada en la cabeza, y cuando le derrotes aparecerá un cofre grande que contiene la Lupa de la Verdad.',
        image: require('../../assets/images/348.png')
      },
      {
        id: 'p',
        text: 'Tras coger la lupa, sal de esta habitación y vuelve a meterte por agujero para llegar a la habitación grande. Nada más salir verás que enfrente hay unas vigas de madera y, en el lado izquierdo, un montón de tierra',
        image: require('../../assets/images/349.png')
      },
      {
        id: 'p',
        text: ' Si pones una bomba sobre el montón de tierra descubrirás un agujero en el que hay un cofre que contiene bombuchus (es una bomba que puedes dirigir tras ponerla).',
        image: require('../../assets/images/350.png')
      },
      {
        id: 'p',
        text: 'Después de conseguir la Lupa de la Verdad y los bombuchus, tienes que salir del pozo por la misma pared por la que entraste (es una pared en la que hay dos vasijas).',
        image: require('../../assets/images/351.png')
      },
      {
        id: 'p',
        text: 'Tras salir del pozo, vuelve al Templo del Tiempo para coger la espada y hacerte de nuevo Link adulto (puedes volver directamente al templo tocando con la ocarina el Preludio de la luz).',
        image: require('../../assets/images/352.png')
      },
      
      
    ]
  },
  {
    id: 'adult_6',
    title: 'Templo de las Sombras',
    location: 'Hyrule',
    era: 'Adulto',
    requirements: 'Ninguno',
    keyItems: ['Flechas de Luz'],
    steps: [
      {
        id: 'p',
        text: 'Para poder llegar a la entrada del Templo de las Sombras tienes que tocar con la ocarina la canción Nocturno de la sombra. Dicha canción te la enseñó Sheik cuando entraste en Kakariko y viste que el pueblo estaba ardiendo (antes de entrar en el pozo). Al tocar el Nocturno de la sombra aparecerás sobre una plataforma elevada del cementerio a la que antes no podías llegar de ninguna manera.',
        image: require('../../assets/images/353.png')
      },
      {
        id: 'p',
        text: 'En este lugar hay una entrada que te lleva a una sala donde hay muchas antorchas apagadas y una puerta cerrada que te lleva al interior del Templo de las Sombras, y para abrir la puerta necesitas uno de los poderes que te conceden las hadas: el fuego de Din.',
        image: require('../../assets/images/354.png')
      },
      {
        id: 'p',
        text: 'Si lo tienes, ponte sobre la plataforma que está en el centro de la sala y úsalo para que todas las antorchas se enciendan a la vez.',
        image: require('../../assets/images/355.png')
      },
      {
        id: 'p',
        text: 'Nada más entrar en el templo tendrás que cruzar un abismo usando el supergancho sobre una diana. Al cruzar este abismo, Navi te dirá que uses la Lupa de la Verdad para ver las paredes falsas. Al hacerlo, verás que la pared del fondo del pasillo es falsa.',
        image: require('../../assets/images/356.png')
      },
      {
        id: 'p',
        text: 'Al atravesar la pared llegarás a una habitación en la que hay una estatua en el centro rodeada por estacas que en la parte de arriba tienen calaveras. Vuelve a usar la Lupa de la Verdad y entonces verás que todas las calaveras que están sobre las estacas desaparecen excepto una, que sigue siendo visible.',
        image: require('../../assets/images/357.png')
      },
      {
        id: 'p',
        text: 'Lo que tienes que hacer en esta habitación es empujar la estatua del centro para que gire de forma que la plataforma de pinchos señale a la estaca que tiene la calavera visible. Para moverla, tendrás que empujar la plataforma que tiene pinchos y si señalas a otra estaca, el suelo se hundirá. Cuando lo hagas, verás que se abre una reja.',
        image: require('../../assets/images/358.png')
      },
      {
        id: 'p',
        text: 'A continuación, vuelve a usar la Lupa de la Verdad para mirar los cuadros que hay en la pared y verás que dos son falsos (uno de ellos es por donde has entrado y el otro está en la misma pared). Metiéndote por uno de ellos llegarás a un pasillo en el que hay una puerta (es el cuadro de la derecha si los miras de frente). Al atravesar dicha puerta tendrás que usar continuamente la lupa, ya que hay muchas paredes falsas, y en la siguiente habitación verás que hay unas calaveras en las paredes.',
        image: require('../../assets/images/359.png')
      },
      {
        id: 'p',
        text: 'En la habitación de las calaveras hay dos paredes falsas que podrás ver con la Lupa de la Verdad. Primero métete por la pared falsa del lado derecho para llegar a una habitación en la que hay un zombi y dos murciélagos (es la pared que tiene una calavera azul). Cuando destruyas a estos enemigos aparecerá un cofre grande que contiene el Mapa de la mazmorra.',
        image: require('../../assets/images/360.png')
      },
      {
        id: 'p',
        text: 'A continuación, vuelve a la habitación de las calaveras y métete por la otra pared falsa (es la pared que está entre las dos vasijas).',
        image: require('../../assets/images/361.png')
      },
      {
        id: 'p',
        text: 'Al entrar, llegarás a otra habitación con calaveras en las paredes donde tendrás que volver a usar la Lupa de la Verdad para ver otro pasadizo que te lleva a una habitación en la que hay muchas manos blancas.',
        image: require('../../assets/images/362.png')
      },
      {
        id: 'p',
        text: 'En esta habitación tienes que eliminar al enemigo blanco que aparece de vez en cuando (Mano muerta) golpeándole en la cabeza, y cuando le derrotes, aparecerá un cofre grande que contiene las botas voladoras.',
        image: require('../../assets/images/363.png')
      },
      {
        id: 'p',
        text: 'Tras coger las botas, vuelve a la habitación donde estaba la estatua que moviste anteriormente y con las botas voladoras puestas salta a la boca que tiene una puerta (es la reja que se abrió anteriormente y ahora podrás llegar porque con las botas flotarás en el vacío durante un tiempo)',
        image: require('../../assets/images/364.png')
      },
      {
        id: 'p',
        text: 'Al meterte por esta puerta llegarás a la planta P-2, y en la habitación a la que llegas verás que hay tres muros agrietados y una estatua que lanza rayos. Los dos muros de las paredes laterales son falsos, y el de la pared de enfrente, que es verdadero, lo podrás romper usando una bomba.',
        image: require('../../assets/images/365.png')
      },
      {
        id: 'p',
        text: 'Primero métete por la pared de la derecha, que es una pared falsa que descubrirás usando la Lupa de la Verdad, y así llegarás a una habitación en la que hay dos momias. Al eliminar a las momias aparecerá un cofre grande que contiene la brújula.',
        image: require('../../assets/images/366.png')
      },
      {
        id: 'p',
        text: 'Después vuelve a la habitación de la estatua que disparaba rayos y métete por la pared que está enfrente de donde sales (es la otra pared falsa que se ve con la Lupa de la Verdad. Es la pared de la izquierda según entras por primera vez en esta habitación). Al meterte por esta pared llegarás a una habitación en la que hay una estatua con cuchillas. En esta habitación tendrás que coger las rupias plateadas para que se abra una reja tras la que hay un cofre que contiene una llave pequeña.',
        image: require('../../assets/images/367.png')
      },
      {
        id: 'p',
        text: 'Cuando tengas la llave, vuelve a la habitación de la estatua que dispara rayos y pon una bomba para destruir la pared que está a la izquierda de donde sales (es la única pared que queda. Está enfrente de la puerta de entrada).',
        image: require('../../assets/images/368.png')
      },
      {
        id: 'p',
        text: 'Al romper esta pared encontrarás una puerta con cerradura, y al atravesarla, llegarás a un pasillo en el que hay arañas gigantes que podrás eliminar con el supergancho. Al final del pasillo hay a un lugar en el que hay cuchillas (Planta P-2).',
        image: require('../../assets/images/369.png')
      },
      {
        id: 'p',
        text: 'Al llegar a la habitación de las cuchillas, avanza hasta llegar al final y llegarás una plataforma en la que te enfrentarás a un esqueleto (para cruzar las cuchillas tienes que pasar por debajo de ellas cuando se eleven). Cuando derrotes al esqueleto, ponte las botas voladoras y salta a una plataforma móvil que está en el lado derecho (la plataforma sube y baja. Cuando la plataforma está arriba es la planta P-2 y cuando está abajo es la planta P-3).',
        image: require('../../assets/images/370.png')
      },
      {
        id: 'p',
        text: 'Después salta desde esta plataforma para caer en el suelo donde hay una estatua que lanza rayos y unos pinchos que giran. Al lado de la estatua hay una puerta con una reja que se abrirá cuando cojas las cinco rupias plateadas (cuatro rupias están a simple vista y la quinta está debajo de la estatua, por lo que has de destruirla con una bomba).',
        image: require('../../assets/images/371.png')
      },
      {
        id: 'p',
        text: 'A continuación, métete por la puerta de la reja y llegarás a una habitación en la que hay unas plataformas con pinchos en la parte de abajo que se mueven en vertical. Si usas la Lupa de la Verdad, verás que en la pared de la derecha hay un bloque marrón escondido',
        image: require('../../assets/images/372.png')
      },
      {
        id: 'p',
        text: 'Tira de este bloque para sacarlo de la pared y después úsalo para ponerlo debajo de las placas con pinchos y que no te aplasten (primero tienes que empujarlo y luego debes tirar de él). Cuando las plataformas no lleguen al suelo podrás entrar en una celda donde encontrarás la 1.ª skulltula dorada.',
        image: require('../../assets/images/373.png')
      },
      {
        id: 'p',
        text: 'En esta habitación hay tres cofres. Dentro del cofre que está en la celda hay flechas. Después sube sobre el bloque que has movido y llegarás a las plataformas más altas (cuando estés sobre el bloque podrás saltar encima de las placas de pinchos). En las plataformas altas verás un interruptor y un cofre que contiene una rupia azul. Al pisar el interruptor aparecerá un cofre en la plataforma de enfrente y podrás llegar hasta él usando el supergancho. Dentro del cofre encontrarás una llave pequeña',
        image: require('../../assets/images/374.png')
      },
      {
        id: 'p',
        text: 'Tras conseguir la llave, sal de esta habitación para volver al lugar donde estaba la estatua que lanzaba rayos y las cinco rupias plateadas. Luego ve al lado izquierdo de la plataforma y verás un camino muy estrecho que al final tiene una cuchilla (guillotina). En este punto tienes que usar la Lupa de la Verdad para ver que al otro lado de la cuchilla hay una plataforma invisible que solo se ve con la lupa. Cuando estés sobre esta plataforma verás una plataforma móvil y desde ella podrás saltar a la puerta con cerradura que está en la pared del fondo (antes de salir de esta habitación puedes ir a la pared de la derecha saltando sobre las plataformas invisibles para llegar a una sala donde está la 2.ª skulltula dorada).',
        image: require('../../assets/images/375.png')
      },
      {
        id: 'p',
        text: 'En la próxima habitación hay dos zombis, una puerta con rejas, una puerta con cerradura y rupias plateadas (también hay pinchos en el suelo que sólo se ven si miras con la Lupa de la Verdad).',
        image: require('../../assets/images/376.png')
      },
      {
        id: 'p',
        text: 'Al eliminar a los zombis aparecerá un cofre que contiene una rupia azul. Para abrir la puerta con rejas que está en la pared de la izquierda tienes que coger todas las rupias, y para lograrlo tendrás que usar el supergancho para agarrarte a las dianas (hay algunas dianas que sólo se ven con la Lupa de la Verdad).',
        image: require('../../assets/images/377.png')
      },
      {
        id: 'p',
        text: 'Cuando la reja se abra deberás atravesar la puerta (la que está a ras del suelo) para llegar a una habitación en la que hay murciélagos y una gran calavera con fuego azul encima (en la pared que está detrás de la calavera encontrarás la 3.ª skulltula dorada). En la plataforma más alta encontrarás dos flores bomba, las cuales tendrás que coger y lanzar dentro de la calavera (la tienes que meter por el agujero que hay en la parte de arriba, donde tiene el fuego azul). Cuando la calavera explote, aparecerá una llave pequeña que caerá directamente en el suelo.',
        image: require('../../assets/images/378.png')
      },
      {
        id: 'p',
        text: 'A continuación, elimina a los murciélagos para que la puerta se abra y vuelve a la habitación anterior, donde estaban las rupias plateadas, para meterte por la puerta con cerradura (para llegar a la puerta con cerradura tienes que agarrarte a una diana invisible que hay en el techo)',
        image: require('../../assets/images/379.png')
      },
      {
        id: 'p',
        text: 'Al meterte por la puerta llegarás a un pasillo en al que hay unos ventiladores que te empujan hacia atrás, cosa que podrás evitar con la ayuda de las botas de hierro.',
        image: require('../../assets/images/380.png')
      },
      {
        id: 'p',
        text: 'Al final del pasillo verás una puerta que te lleva a una habitación en la que hay dos zombis (para llegar al final del pasillo tienes que agarrarte con el supergancho a una viga de madera que hay en el techo).',
        image: require('../../assets/images/381.png')
      },
      {
        id: 'p',
        text: 'En esta habitación tienes que usar la Lupa de la Verdad y en la esquina del fondo a la derecha verás un cofre invisible que contiene flechas (para salir de la habitación debes eliminar a los zombis para que se abra la reja). Tras abrir el cofre, vuelve a la habitación anterior y si miras a la pared de la derecha según sales verás que hay un pasillo invisible en el que hay una puerta. Usa las botas voladoras para llegar a ese pasillo.',
        image: require('../../assets/images/382.png')
      },
      {
        id: 'p',
        text: 'Al meterte por la puerta que hay en ese pasillo llegarás a una habitación en la que hay dos momias, pinchos y una puerta con cerradura, y si eliminas a las momias aparecerá un cofre que contiene una rupia azul. En esta misma habitación verás que en la esquina de la derecha según entras hay un montón de tierra, y si pones una bomba, aparecerá un cofre que contiene una llave pequeña (para ver el cofre tienes que usar la Lupa de la Verdad, ya que el cofre es invisible).',
        image: require('../../assets/images/383.png')
      },
      {
        id: 'p',
        text: 'Cuando cojas la llave del cofre deberás atravesar la puerta con cerradura para llegar a una habitación en la que hay un bloque grande a la izquierda, una escalera elevada a la derecha y un gran barco al fondo.',
        image: require('../../assets/images/384.png')
      },
      {
        id: 'p',
        text: 'Lo que tienes que hacer es tirar del bloque para ponerlo debajo de la escalera elevada (en la parte de arriba de donde estaba el bloque inicialmente podrás encontrar la 4.ª skulltula dorada). A continuación, sube sobre al bloque y desde ahí sube por la escalera para poder saltar a la cubierta del barco.',
        image: require('../../assets/images/385.png')
      },
      {
        id: 'p',
        text: 'En la cubierta del barco verás que hay un dibujo de la Trifuerza. Ponte sobre el símbolo de la Trifuerza y usa la ocarina opara tocar la Nana de Zelda. Al hacerlo, el barco se empezará a mover, y mientras lo haga te tendrás que enfrentar a dos esqueletos. Cuando el barco llegue al final del recorrido, Navi te dirá que saltes a la plataforma de la izquierda porque el barco se va a hundir.',
        image: require('../../assets/images/386.png')
      },
      {
        id: 'p',
        text: 'Cuando saltes a la plataforma que está al final del recorrido verás que hay una puerta en la pared del final. Al meterte por esta puerta llegarás a una habitación en la que tienes que usar la Lupa de la Verdad, ya que hay paredes invisibles.',
        image: require('../../assets/images/387.png')
      },
      {
        id: 'p',
        text: 'Allí hay tres puertas además de la puerta por la que has entrado, y si te metes por la que está al fondo, llegarás a una habitación en la que hay cuatro calaveras gigantes con fuego azul encima, dos flores bomba y la 5.ª skulltula dorada.',
        image: require('../../assets/images/388.png')
      },
      {
        id: 'p',
        text: 'Si te metes por la puerta de la izquierda llegarás a una habitación en la que hay una mano invisible, y si la eliminas, aparecerá un cofre que contiene una llave pequeña (para poder ver la mano tienes que usar la Lupa de la Verdad).',
        image: require('../../assets/images/389.png')
      },
      {
        id: 'p',
        text: 'Si te metes por la puerta de la derecha llegarás a una habitación en la que hay dos paredes de madera con pinchos que se van juntando',
        image: require('../../assets/images/390.png')
      },
      {
        id: 'p',
        text: 'Usa el fuego de Din para destruirlas y así harás aparecer un cofre que contiene una rupia azul y un cofre amarillo y azul que contiene la gran llave.',
        image: require('../../assets/images/391.png')
      },
      {
        id: 'p',
        text: 'Cuando tengas la llave del jefe vuelve a la habitación donde te dejó el barco. Ahora, ponte entre las dos vasijas que hay en esta sala y mira al otro lado del abismo para ver unas flores bomba que está junto a una estatua.',
        image: require('../../assets/images/392.png')
      },
      {
        id: 'p',
        text: 'Después dispara una flecha a las flores bomba para que exploten y hagan caer la estatua, de manera que forme un puente para que puedas cruzar al otro lado, lugar donde encontrarás una puerta con cerradura.',
        image: require('../../assets/images/393.png')
      },
      {
        id: 'p',
        text: 'Al meterte por la puerta con cerradura llegarás a una habitación en la que tienes que usar la Lupa de la Verdad para ver unas plataformas invisibles. Cruza sobre esas plataformas con las botas voladoras puestas y así alcanzarás la puerta del Jefe.',
        image: require('../../assets/images/394.png')
      },
      {
        id: 'p',
        text: ' Al atravesarla llegarás a una sala en la que hay un agujero en el suelo. Tírate por él y caerás en la habitación del enemigo final: BONGO BONGO.',
        image: require('../../assets/images/395.png')
      },
      {
        id: 'p',
        text: 'Este enemigo es un ojo con dos manos que están tocando un tambor. Para derrotarle primero tienes que dispararle una flecha a cada mano para paralizarlas. Después usa la Lupa de la Verdad para verle el ojo y a continuación dispárale una flecha al ojo. Cuando el ojo caiga al suelo tienes que golpearle continuamente con la espada. Este proceso lo tienes que repetir 5 veces.',
        image: require('../../assets/images/396.png')
      },
      {
        id: 'p',
        text: 'A este enemigo sólo se le ve el ojo cuando usas la lupa. Si tienes mucha magia es aconsejable que la uses durante todo el combate en lugar de ponerla y quitarla continuamente. Tras derrotar a Bongo Bongo aparecerá un contenedor de corazón y un haz de luz que te llevará a la Sala de los Sabios, lugar donde aparecerá Impa, la sabia de la sombra, la cual te recompensará con el Medallón de la Sombra.',
        image: require('../../assets/images/397.png')
      },

    ]
  },
  {
    id: 'adult_7',
    title: 'Fortaleza Gerundo',
    location: 'Hyrule',
    era: 'Adulto',
    requirements: 'Ninguno',
    keyItems: ['Flechas de Luz'],
    steps:[
      {
        id: 'p',
        text: 'Después de completar el Templo de las Sombras aparecerás en la plataforma elevada del cementerio, y lo siguiente que debes hacer es ir a la fortaleza gerudo.',
        image: require('../../assets/gerundo/1.png')
      },
      {
        id: 'p',
        text: 'A continuación, sal del cementerio y de Kakariko para volver a la llanura de Hyrule y ve al camino que está en la parte izquierda del mapa para llegar a la entrada del valle Gerudo',
        image: require('../../assets/gerundo/2.png')
      },
      {
        id: 'p',
        text: 'Al meterte por dicho camino llegarás a un lugar donde hay un puente de madera roto.',
        image: require('../../assets/gerundo/3.png')
      },
      {
        id: 'p',
        text: 'Para cruzar el puente puedes hacerlo agarrándote con el supergancho en el cartel que hay sobre el puente o bien saltando con Epona (si la has conseguido).',
        image: require('../../assets/gerundo/4.png')
      },
      {
        id: 'p',
        text: 'Tras cruzar el puente verás a un hombre al lado de una tienda de campaña, y al hablar con él te dirá que no puede reparar el puente porque sus trabajadores han abandonado el trabajo para convertirse en bandidos.',
        image: require('../../assets/gerundo/5.png')
      },
      {
        id: 'p',
        text: 'Luego te pedirá que vayas a la fortaleza para ver que está ocurriendo con sus obreros. Así que que sigue avanzando por el único camino existente y así llegarás a la fortaleza gerudo.',
        image: require('../../assets/gerundo/6.png')
      },
      {
        id: 'p',
        text: 'Al llegar a los alrededores del fuerte, las soldados te harán preso y te meterán en la cárcel (siempre que te vea una soldado te meterá en prisión).',
        image: require('../../assets/gerundo/7.png')
      },
      {
        id: 'p',
        text: 'Cuando te metan en la cárcel podrás salir por un agujero que hay en la parte de arriba usando el supergancho.',
        image: require('../../assets/gerundo/8.png')
      },
      {
        id: 'p',
        text: 'Tras salir de prisión tendrás que tirarte a la parte inferior para meterte por la puerta que está abajo a la izquierda del fuerte, a ras del suelo.',
        image: require('../../assets/gerundo/9.png')
      },
      {
        id: 'p',
        text: 'Al meterte por esta puerta llegarás a una habitación en la que hay un carpintero dentro de una celda cerrada. Habla con él y entonces aparecerá una guerrera contra la que tendrás que luchar. Cuando la derrotes, se le caerá una llave pequeña para abrir la celda (en el caso de que la guerrera te golpee con un giro, te dejará inconsciente y te meterá de nuevo en la cárcel).',
        image: require('../../assets/gerundo/10.png')
      },
      {
        id: 'p',
        text: 'Cuando consigas la llave podrás abrir la celda para rescatar al carpintero. Tras rescatar a Ichiro, el primer carpintero, te tendrás que meter por la otra puerta que hay en esta habitación para aparecer en el exterior.',
        image: require('../../assets/gerundo/11.png')
      },
      {
        id: 'p',
        text: 'Una vez en el exterior, métete por la puerta que hay al lado y llegarás a un pasillo. Sigue avanzando y continúa por el primer pasillo hacia la derecha para llegar de nuevo al exterior del fuerte.',
        image: require('../../assets/gerundo/12.png')
      },
      {
        id: 'p',
        text: 'Luego métete por la puerta de la derecha y llegarás a una habitación en la que hay otro carpintero dentro de otra celda cerrada (delante de la puerta de entrada hay una guerrera que puedes eliminar con el arco o puedes esperar a que se dé la vuelta para que no te vea). Al hablar con el carpintero aparecerá una guerrera, y cuando la derrotes, te dará una llave pequeña con la que podrás abrir la celda y rescatar a Jiro, el segundo carpintero.',
        image: require('../../assets/gerundo/13.png')
      },
      {
        id: 'p',
        text: 'Después de rescatar al segundo carpintero tendrás que meterte por la otra puerta que hay en la habitación para aparecer en el exterior. Cuando estés fuera sigue de frente y te encontrarás una enredadera por la que tendrás que bajar para llegar a una puerta.',
        image: require('../../assets/gerundo/14.png')
      },
      {
        id: 'p',
        text: 'Dicha puerta te llevará a una habitación en la que hay otra celda en la que está preso otro carpintero. Al hablar con él aparecerá una guerrera, y cuando la derrotes, te dará la llave pequeña para abrir la celda de Sabooro, el tercer carpintero.',
        image: require('../../assets/gerundo/15.png')
      },
      {
        id: 'p',
        text: 'Tras rescatar al tercer carpintero, sal por la puerta por la que has entrado para aparecer otra vez en el exterior. Una vez fuera, sigue de frente para subir por la enredadera de la pared y cuando estés arriba métete por la puerta de la izquierda.',
        image: require('../../assets/gerundo/16.png')
      },
      {
        id: 'p',
        text: 'Por esta puerta llegarás a una habitación en la que hay guardias gerudo en la parte de abajo.',
        image: require('../../assets/gerundo/17.png')
      },
      {
        id: 'p',
        text: 'Para evitarlas usa el supergancho para agarrarte a una viga de madera que está en la pared de enfrente de donde tú estás. Allí encontrarás una puerta que te lleva al exterior de la fortaleza (a las soldados también las puedes eliminar con flechas).',
        image: require('../../assets/gerundo/18.png')
      },
      {
        id: 'p',
        text: 'Tras salir, salta para llegar a la puerta que hay a la izquierda, en un nivel más bajo (es la izquierda de la pantalla según sales por la puerta. Si pulsas el botón "L" para que la cámara se ponga detrás de Link tendrás que saltar hacia la derecha). Al meterte por esta puerta llegarás a un pasillo en la que hay una soldado.',
        image: require('../../assets/gerundo/19.png')
      },
      {
        id: 'p',
        text: 'Dispárale una flecha desde la parte de atrás de la caja y después sigue avanzando para llegar a una habitación en la que hay otra celda con otro carpintero. Al hablar con él aparecerá una guerrera, y cuando la derrotes, obtendrás la llave pequeña con la que podrás abrir la celda y rescatar a Shiro, el cuarto carpintero.',
        image: require('../../assets/gerundo/20.png')
      },
      {
        id: 'p',
        text: 'Cuando rescates al cuarto carpintero aparecerá una guerrera gerudo, y al hablar con ella te dirá que el Templo del Espíritu está al otro lado del desierto.',
        image: require('../../assets/gerundo/21.png')
      },
      {
        id: 'p',
        text: ' Cuando termine la conversación te dará un permiso para andar libremente por la fortaleza: el pase de socio gerudo. También te dirá que con esta tarjeta podrás entrar en el centro de instrucción gerudo.',
        image: require('../../assets/gerundo/22.png')
      },
      {
        id: 'p',
        text: 'Cuando tengas el pase de socio gerudo sal al exterior y dirígete a una compuerta de barrotes de madera que está justo al lado contrario de la entrada a esta zona.',
        image: require('../../assets/gerundo/23.png')
      },
      {
        id: 'p',
        text: 'Al lado de la compuerta hay una escalera, y si subes por ella, te encontrarás con el personaje que se encarga de abrirla.',
        image: require('../../assets/gerundo/24.png')
      },
      

    ]
  },
  {
    id: 'adult_8',
    title: 'Templo del Espiritu',
    location: 'Hyrule',
    era: 'Adulto',
    requirements: 'Ninguno',
    keyItems: ['Flechas de Luz'],
    steps:[
      {
        id: 'p',
        text: 'Habla con dicho personaje para abrir la compuerta y así podrás acceder al desierto encantado (también te dará unas pistas para que puedas cruzarlo).',
        image: require('../../assets/gerundo/25.png')
      },
      {
        id: 'p',
        text: 'Al entrar en el desierto encantado tendrás que ir de frente hasta llegar a un lugar donde hay una caja. Luego súbete en ella y usa el supergancho para agarrarte a otra de las cajas que están al otro lado de unas arenas movedizas, y así podrás cruzar sin hundirte.',
        image: require('../../assets/gerundo/26.png')
      },
      {
        id: 'p',
        text: 'A continuación, tendrás que seguir el camino yendo de poste en poste, ya que de lo contrario te perderás y volverás a aparecer al inicio del desierto (siempre que llegas a un poste se verá el siguiente).',
        image: require('../../assets/gerundo/27.png')
      },
      {
        id: 'p',
        text: 'Al final del camino de los postes encontrarás una pequeña caseta de piedra. ',
        image: require('../../assets/gerundo/28.png')
      },
      {
        id: 'p',
        text: 'Dentro de la casa de piedra hay una skulltula dorada y dos antorchas apagadas. Si enciendes las antorchas aparecerá un cofre que contiene una rupia púrpura (las antorchas las puedes encender con el fuego de Din o con flechas de fuego).',
        image: require('../../assets/gerundo/29.png')
      },
      {
        id: 'p',
        text: 'En el tejado de la casa hay una inscripción que dice que uses la Lupa de la Verdad.',
        image: require('../../assets/gerundo/30.png')
      },
      {
        id: 'p',
        text: 'Hazlo, y entonces verás a un fantasma al que tendrás que seguir hasta llegar a la salida del desierto (es un lugar donde hay dos postes de madera).',
        image: require('../../assets/gerundo/31.png')
      },
      {
        id: 'p',
        text: 'Al salir del desierto llegarás a un lugar llamado coloso del desierto, lugar donde encontrarás la entrada del Templo del Espíritu.',
        image: require('../../assets/gerundo/32.png')
      },
      {
        id: 'p',
        text: 'Al entrar en el templo verás dos inscripciones en la pared: una dice que si quieres pasar tienes que hacerlo convertido en niño y otra dice que necesitarás el poder de la plata',
        image: require('../../assets/gerundo/33.png')
      },
      {
        id: 'p',
        text: 'A continuación, debes salir del templo para encontrarte con Sheik y aprender el Réquiem del espíritu (con esta melodía podrás volver a este punto automáticamente).',
        image: require('../../assets/gerundo/34.png')
      },
      {
        id: 'p',
        text: 'Tras aprender la melodía, vuelve al Templo del Tiempo para dejar la Espada Maestra y convertirte en niño (para volver al templo usa la ocarina para tocar el Preludio de la luz). Cuando seas otra vez un niño, vuelve al Templo del Espíritu tocando con la ocarina el Réquiem del espíritu. ',
        image: require('../../assets/gerundo/35.png')
      },
      {
        id: 'p',
        text: 'Al entrar en el templo, sube la escalera y a la izquierda verás un agujero y una guerrera gerudo. Al hablar con la guerrera te preguntará que has perdido en ese sitio y le podrás dar tres posibles respuestas.',
        image: require('../../assets/gerundo/36.png')
      },
      {
        id: 'p',
        text: 'Tienes que responder la tercera opción "Nada, nada". A continuación, la gerudo te hará otra pregunta a la que puedes dar otras dos respuestas. Contesta "¿Y qué si lo fuera?" y entonces la guerrera te dirá que te metas por el agujero para buscar por ellas los Guantes de Plata (te dirá que un niño no lo podría utilizar). Luego te preguntará si estás dispuesto a ayudarla y tendrás que contestar que "Sí". Cuando la guerrera se aparte del agujero, métete por él pulsando el botón "A" a su lado y aparecerás en una habitación en la que hay dos puertas cerradas con rejas y un agujero en la pared. Para que las rejas desaparezcan tendrás que eliminar a todos los murciélagos y también tendrás que destruir la estatua del centro con una bomba.',
        image: require('../../assets/gerundo/37.png')
      },
      {
        id: 'p',
        text: 'A continuación, métete por la puerta que está a la izquierda y llegarás a una habitación en la que hay un esqueleto gigante, un agujero, un interruptor con forma de rombo y una calavera rodeada de fuego verde.',
        image: require('../../assets/gerundo/38.png')
      },
      {
        id: 'p',
        text: 'Elimina al esqueleto y a la calavera (paralizándola con el bumerán y después disparándola con el tirachinas), y después tira el bumerán para que golpee al interruptor que está detrás de la placa metálica. Posiblemente tendrás que intentarlo varias veces, y cuando lo logres, caerá la placa metálica para formar un puente, el cual deberás cruzar luego para alcanzar una puerta que hay al otro lado. Al atravesar la puerta llegarás a una habitación en la que hay un interruptor que hace aparecer una llama de fuego y un enemigo llamado "Anubis".',
        image: require('../../assets/gerundo/39.png')
      },
      {
        id: 'p',
        text: 'Para que la reja de la puerta de salida se abra tienes que eliminar a dicho enemigo con fuego. Lo puedes hacer de dos formas: la primera es haciendo que el enemigo se ponga donde aparece un fuego al pulsar el interruptor (como el enemigo se pone al lado contrario a donde tú estés te tendrás que poner en la plataforma del lado izquierdo), y la segunda es usando el fuego de Din para quemarle. Cuando se abra la puerta tendrás que atravesarla. En la siguiente habitación hay una reja que divide la habitación en dos, y también hay cinco rupias plateadas y la 1.ª skulltula dorada. Cuando cojas las cinco rupias, un trozo de reja caerá al suelo y formará un puente (para coger dos de las rupias tendrás que trepar por la reja). Al cruzar por este puente llegarás a un lugar donde hay dos antorchas apagadas.',
        image: require('../../assets/gerundo/40.png')
      },
      {
        id: 'p',
        text: 'Si enciendes las antorchas con el fuego de Din o prendiendo un palo deku con la antorcha encendida, aparecerá un cofre al otro lado del puente que contiene una llave pequeña. Cuando la tengas, métete por la puerta que te lleva de nuevo a la habitación donde rompiste la estatua con la bomba (es la habitación de las dos puertas y el agujero en la pared).',
        image: require('../../assets/gerundo/41.png')
      },
      {
        id: 'p',
        text: 'Métete ahora por al agujero de la pared para llegar a una habitación en la que hay una puerta con cerradura. Tras atravesarla, tendrás que trepar por una pared en la que hay arañas que debes eliminar con el tirachinas (por allí estará la 2.ª skulltula dorada). Así llegarás a una habitación en la que hay un sol en el suelo, una grieta en lo alto de la pared, un interruptor y un lagarto armado con una espada (planta P1).',
        image: require('../../assets/gerundo/42.png')
      },
      {
        id: 'p',
        text: 'En esta habitación deberás golpear el interruptor con el bumerán para que aparezcan dos cofres que contienen una rupia y bombuchus (Bomba ratón). A continuación, tienes que lanzar un bombuchu para que explote al lado de la grieta que hay en lo alto de la pared (mantén fijado el blanco en la grieta manteniendo pulsado el botón "L"). Cuando se rompa la grieta, entrará un rayo de luz que dará sobre el sol del suelo y entonces la puerta de rejas se abrirá.',
        image: require('../../assets/gerundo/43.png')
      },
      {
        id: 'p',
        text: 'Luego métete por la puerta que se ha abierto y así llegarás a una habitación muy grande. En la parte inferior de la habitación hay dos antorchas apagadas, y si las enciendes con la magia fuego de Din, aparecerá un cofre que contiene el Mapa de la mazmorra.',
        image: require('../../assets/gerundo/44.png')
      },
      {
        id: 'p',
        text: ' Al entrar en esta habitación aparecerás al lado de una estatua y de una escalera. Lo que tienes que hacer es empujar la estatua para tirarla a la plataforma de abajo, de forma que se quede encima del interruptor que hace que la puerta de rejas que hay arriba se quede abierta (en la plataforma que está frente a la puerta verás la 3.ª skulltula dorada, pero no la podrás coger hasta que llegues a esta sala siendo Link adulto). Cuando la puerta esté abierta, métete por ella para llegar a la planta P2. Al meterte por esta puerta llegarás a un pasillo en el que hay otra puerta que te lleva a una habitación bastante grande en la que hay cinco rupias plateadas.',
        image: require('../../assets/gerundo/45.png')
      },
      {
        id: 'p',
        text: 'Cuando cojas las cinco rupias plateadas verás que una de las antorchas se enciende (para llegar a las rupias plateadas puedes mover los bloques del suelo para subirte en ellos). Prende un palo deku con el fuego de la antorcha que se acaba de encender y con él enciende las tres antorchas que están apagadas. Si lo haces rápido, podrás hacer que todas las antorchas estén encendidas a la vez, y entonces aparecerá un cofre que contiene una llave pequeña.',
        image: require('../../assets/gerundo/46.png')
      },
      {
        id: 'p',
        text: 'Tras coger la llave, mueve el bloque gris que tiene un sol encima y ponlo debajo del rayo de luz que entra por el agujero de la pared para que la puerta de salida se abra.',
        image: require('../../assets/gerundo/47.png')
      },
      {
        id: 'p',
        text: 'Tras meterte por esa puerta llegarás a un pasillo en el que hay una puerta con cerradura que te lleva a una habitación en la que hay una gran estatua de un soldado llamado Nudillo de hierro (en el pasillo encontrarás la 4.ª skulltula dorada). Acércate a la estatua y golpéala con la espada para que cobre vida. Seguidamente la tendrás que destruir golpeándole continuamente con la espada (le tienes que golpear después de que la estatua te intente golpear a ti con el hacha).',
        image: require('../../assets/gerundo/48.png')
      },
      {
        id: 'p',
        text: 'Después de derrotar al soldado del hacha se abrirá una puerta que te lleva a un pasillo en el exterior del templo. Al final de este pasillo te encontrarás al Búho (Gaebora), y tras hablar con él, podrás abrir el cofre grande que hay al lado.',
        image: require('../../assets/gerundo/49.png')
      },
      {
        id: 'p',
        text: 'Dentro hallarás los Guantes de Plata.',
        image: require('../../assets/gerundo/50.png')
      },
      {
        id: 'p',
        text: 'Tras coger los Guantes de Plata verás cómo las brujas hacen desaparecer a Nabooru (la guerrera gerudo que estaba en la entrada del agujero del templo). ',
        image: require('../../assets/gerundo/51.png')
      },
      {
        id: 'p',
        text: 'Cuando las brujas se vayan, toca la melodía Preludio de la luz para volver automáticamente al Templo del Tiempo y vuelve a sacar la Espada Maestra del pedestal para convertirte de nuevo en Link adulto. Finalmente, usa la ocarina para tocar la melodía Réquiem del espíritu para volver a la entrada del Templo del Espíritu.',
        image: require('../../assets/gerundo/52.png')
      },
      {
        id: 'p',
        text: 'Vuelve a entrar en el templo cuando seas Link adulto, sube la escalera y empuja el gran bloque que hay a la derecha (ahora sí podrás moverlo porque tienes los Guantes de Plata).',
        image: require('../../assets/gerundo/53.png')
      },
      {
        id: 'p',
        text: 'Al empujar el bloque aparecerá un camino que te lleva a una habitación en la que hay un enemigo que te lanza rayos, un interruptor con forma de rombo (está encima de la estatua que lanza rayos), dos puertas con rejas y una puerta con cerradura.',
        image: require('../../assets/gerundo/54.png')
      },
      {
        id: 'p',
        text: 'Golpea con el supergancho el interruptor que está sobre la estatua y las puertas de rejas se abrirán. A continuación, métete por la puerta de la izquierda y llegarás a una habitación en la que hay un lobo y un símbolo de la Trifuerza en el suelo.',
        image: require('../../assets/gerundo/55.png')
      },
      {
        id: 'p',
        text: 'Primero elimina al lobo y después colócate sobre el símbolo de la Trifuerza para tocar con la ocarina la Nana de Zelda. Al hacerlo, aparecerá un cofre grande al que llegarás usando el supergancho sobre él. Dentro hallarás la brújula.',
        image: require('../../assets/gerundo/56.png')
      },
      {
        id: 'p',
        text: 'Después vuelve a la habitación anterior y métete por la otra puerta que tenía una reja (es la puerta de la derecha). En la habitación a la que llegas hay un foso en el que ruedan tres piedras redondas y también hay rupias plateadas.',
        image: require('../../assets/gerundo/57.png')
      },
      {
        id: 'p',
        text: 'Cuando cojas las cinco rupias plateadas se abrirá la reja de la puerta de salida (para coger la rupia que está elevada tendrás que usar las botas voladoras desde la plataforma por la que has entrado). En la pared hay un bloque azul empotrado y detrás está la 5.ª skulltula dorada. Para que el bloque se quite de ese lugar tienes que ponerte a su lado y tocar la Canción del tiempo. En la siguiente habitación hay un cofre que contiene una llave pequeña. Cuando la tengas, vuelve a la habitación donde estaba la estatua que lanzaba rayos y métete por la puerta con cerradura para llegar a una habitación en la que al final hay una pared por la que puedes trepar para llegar a la planta superior (planta P1).',
        image: require('../../assets/gerundo/58.png')
      },
      {
        id: 'p',
        text: 'Tras subir llegarás a una habitación en la que verás un espejo en el que se refleja un rayo de luz que entra por la pared (en esta habitación hay una mano que sólo la puedes ver sí usas la Lupa de la Verdad).',
        image: require('../../assets/gerundo/59.png')
      },
      {
        id: 'p',
        text: 'Lo que tienes que hacer es girar el espejo para que la luz le dé a los soles que hay en la pared. Si iluminas los dos soles de la izquierda aparecerán dos cofres (el cofre de la izquierda contiene un corazón que te rellena un poco la energía y el otro cofre te lanza hielo que te congelará). Si iluminas el tercero empezando a contar por la izquierda se abrirá la puerta de salida, y si iluminas el cuarto, aparecerá una mano que te lleva a la entrada del templo. A continuación, métete por la puerta de salida y llegarás a una habitación muy grande en la que estuviste anteriormente cuando eras niño (es una habitación en la que hay una gran estatua con las manos abiertas). Sube por la escalera que está al principio y arriba del todo verás una puerta con cerradura. Cuando estés al lado de la puerta, mira hacia atrás y verás que en una de las manos de la estatua hay un símbolo de la Trifuerza.',
        image: require('../../assets/gerundo/60.png')
      },
      {
        id: 'p',
        text: 'Ponte las botas voladoras para poder llegar a esa mano y cuando estés encima del símbolo toca con la ocarina la Nana de Zelda (si caes al suelo de la habitación puedes subir de nuevo usando el supergancho en la antorcha). Al tocar la canción, aparecerá un cofre en la otra mano y en su interior encontrarás una llave pequeña. En la plataforma que está a la derecha de la estatua también aparece otro cofre que contiene cinco rupias (en esta plataforma hay un interruptor oxidado que se pulsa con el martillo).',
        image: require('../../assets/gerundo/61.png')
      },
      {
        id: 'p',
        text: 'Para llegar hasta esa plataforma tienes que agarrarte al cofre con el supergancho. Si pulsas el interruptor oxidado con el martillo, se abrirá la puerta con rejas que está enfrente de la gran estatua (por esta puerta encontrará un camino que comunica la primera habitación del templo con la habitación de la gran estatua).Cuando tengas la llave, métete por la puerta con cerradura que estaba en lo alto de la escalera de la habitación de la gran estatua (para llegar a la escalera te puedes agarrar con el supergancho en la antorcha que hay al lado). Al meterte por esta puerta llegarás a la planta P2.',
        image: require('../../assets/gerundo/62.png')
      },
      {
        id: 'p',
        text: 'Tras meterte por la puerta con cerradura llegarás a un pasillo en el que hay otra puerta por la que te tienes que meter para llegar a una habitación en la que hay una puerta con rejas, una puerta con cerradura y tres enemigos llamados "Anubis".',
        image: require('../../assets/gerundo/63.png')
      },
      {
        id: 'p',
        text: 'Para que se abra la puerta con rejas tienes que eliminar a estos enemigos con fuego. Lo puedes hacer pisando el interruptor para que aparezca fuego (cuando aparezca el fuego tienes que hacer que estos enemigos se metan dentro) o bien usando la magia fuego de Din.',
        image: require('../../assets/gerundo/64.png')
      },
      {
        id: 'p',
        text: 'Cuando se abra la puerta de rejas métete por ella y llegarás en una habitación en la que hay dos puertas con rejas, cuatro estatuas y un interruptor en el suelo. Al pisar el interruptor se abrirá una de las puertas, pero cuando le dejas de pisar la puerta se cierra. Lo que tienes que hacer es acercarte a la puerta de la derecha y desde ese punto tienes que golpear con el supergancho a las estatuas que están detrás del interruptor. Entonces las estatuas se empezarán a mover y cuando pisen el interruptor podrás abrir la puerta.',
        image: require('../../assets/gerundo/65.png')
      },
      {
        id: 'p',
        text: 'Al meterte por esa puerta aparecerás en un pasillo con escaleras. En el descansillo de este pasillo hay dos cofres que sólo se ven con la Lupa de la Verdad (contienen corazones que te rellenan la energía). En la parte de arriba de la escalera hay una puerta por la que te tienes que meter. ',
        image: require('../../assets/gerundo/66.png')
      },
      {
        id: 'p',
        text: 'En la siguiente habitación verás una estatua plateada que va armada con un hacha, y si te acercas a ella y la golpeas con la espada, cobrará vida. Para eliminar a este enemigo (Nudillo de hierro) tienes que golpearle con la espada después de que él te ataque con el hacha (cuando este enemigo rompe alguna columna con el hacha aparecerán corazones con los que puedes rellenar tu energía).',
        image: require('../../assets/gerundo/67.png')
      },
      {
        id: 'p',
        text: 'Cuando derrotes a este enemigo se abrirá la puerta de salida y llegarás a un pasillo que se encuentra en el exterior del templo. Allí encontrarás un cofre grande que contiene el escudo espejo.',
        image: require('../../assets/gerundo/69.png')
      },
      {
        id: 'p',
        text: 'Tras conseguir el escudo espejo vuelve a meterte por donde has salido al exterior y después ve dos habitaciones más atrás para llegar a la habitación donde estaban las cuatro estatuas y el interruptor. Allí había otra puerta con rejas que todavía no habías podido abrir. Para hacerlo, equípate con el escudo espejo y ponte debajo del rayo de luz que entra por una ventana. A continuación, pulsa el botón "R" para cubrirte con el escudo y verás que la luz se refleja en él. Con el reflejo del escudo tienes que iluminar el sol que hay en la pared y la puerta con rejas se abrirá.',
        image: require('../../assets/gerundo/70.png')
      },
      {
        id: 'p',
        text: 'En la siguiente habitación encontrarás un cofre que contiene una llave pequeña. Cuando la tengas, vuelve a la sala anterior y métete por la puerta de la derecha para llegar de nuevo a la habitación donde tuviste que eliminar a los tres enemigos con el fuego. En esta habitación hay una puerta con cerradura que ahora si podrás abrir para continuar por ella.',
        image: require('../../assets/gerundo/71.png')
      },
      {
        id: 'p',
        text: 'Al meterte por esta puerta llegarás a una habitación en la que hay partes móviles de la pared por las que puedes trepar. Para llegar arriba del todo lo mejor es usar el supergancho para agarrarte a lo alto de la pared.',
        image: require('../../assets/gerundo/72.png')
      },
      {
        id: 'p',
        text: 'Una vez arriba encontrarás una puerta que te lleva a una sala en la que hay una puerta con rejas, una puerta normal y un símbolo de la trifuerza.',
        image: require('../../assets/gerundo/73.png')
      },
      {
        id: 'p',
        text: 'Lo primero que debes hacer es tocar con la ocarina la Nana de Zelda sobre el símbolo de la Trifuerza que hay en el suelo y la puerta de rejas se abrirá. Tras meterte por la puerta de rejas llegarás a una habitación en la que hay un cofre grande rodeado por fuego y varias puertas falsas en la pared (encima del cofre hay una plataforma con un interruptor al que de momento no puedes llegar).',
        image: require('../../assets/gerundo/74.png')
      },
      {
        id: 'p',
        text: 'Si rompes las puertas falsas que hay en la pared con bombas verás que aparece un ojo, y si luego le disparas una flecha, aparecerá una plataforma al lado de la plataforma sobre la que está el interruptor',
        image: require('../../assets/gerundo/75.png')
      },
      {
        id: 'p',
        text: ' A continuación, súbete en la plataforma que ha aparecido enganchándote con el supergancho a la diana que hay en al techo, y una vez estés arriba, salta a la otra plataforma para pisar el interruptor. Tras pisarlo, desaparecerá el fuego y podrás abrir el cofre para coger la gran llave.',
        image: require('../../assets/gerundo/76.png')
      },
      {
        id: 'p',
        text: 'Cuando tengas la gran llave, sal de esta habitación y métete por la puerta que hay a la derecha, y en la parte más baja de la siguiente habitación encontrarás un interruptor con forma de rombo que al activarlo abrirá la reja de una puerta por la que debes continuar.',
        image: require('../../assets/gerundo/77.png')
      },
      {
        id: 'p',
        text: 'En la próxima habitación hay un espejo, y si pones una bomba en la pared de la izquierda del espejo, se romperá y verás que hay otra habitación con otro espejo.',
        image: require('../../assets/gerundo/78.png')
      },
      {
        id: 'p',
        text: 'El primer espejo lo tienes que girar para que la luz le dé al segundo espejo, y el segundo espejo tienes que girarlo para que la luz vaya por el pasillo donde está la reja. Después, vuelve a la habitación donde estaba el espejo redondo y las cadenas y ahora verás que al espejo redondo le llega un rayo de luz. A continuación, ponte entre las cadenas que hay debajo del espejo e ilumina el sol que está en la pared de la izquierda con la ayuda del escudo espejo.',
        image: require('../../assets/gerundo/79.png')
      },
      {
        id: 'p',
        text: 'Al iluminar el sol, la plataforma donde estás subido descenderá y se quedará a la altura de la cara de la estatua que tenía las manos extendidas (si te caes de esta plataforma podrás volver a subir agarrándote con el supergancho en las cadenas).',
        image: require('../../assets/gerundo/80.png')
      },
      {
        id: 'p',
        text: 'A continuación, usa el escudo espejo para iluminar la cara de la gran estatua y esta se destruirá, dejando a la vista una reja a la que puedes llegar con el supergancho. Detrás de la reja encontrarás la puerta del jefe.',
        image: require('../../assets/gerundo/81.png')
      },
      {
        id: 'p',
        text: 'Al meterte por esa puerta llegarás a una habitación en la que hay dos brujas y un soldado plateado. Cuando las brujas se vayan te tendrás que enfrentar al soldado plateado y rojo (Nudillo de hierro).',
        image: require('../../assets/gerundo/82.png')
      },
      {
        id: 'p',
        text: 'Para derrotarle le tienes que golpear con la espada después de que él te intente golpear con el hacha. Tras eliminarle verás que el soldado realmente era Nabooru, la guerrera gerudo, que estaba hipnotizada.',
        image: require('../../assets/gerundo/83.png')
      },
      {
        id: 'p',
        text: 'A continuación, métete por la puerta que se ha abierto y llegarás a la habitación en la que te enfrentarás al enemigo final: las hermanas hechiceras BIROVA.',
        image: require('../../assets/gerundo/84.png')
      },
      {
        id: 'p',
        text: 'El enemigo final de este templo son dos brujas gemelas: Koume y Kotake, las cuales lanzan hielo y fuego. Para que aparezcan, tienes que subir a lo alto de la plataforma central trepando por una de las paredes. En un principio, las brujas estarán separadas y te atacarán por turnos (para enfrentarte a ellas tendrás que estar en lo alto de la plataforma del centro).',
        image: require('../../assets/gerundo/85.png')
      },
      {
        id: 'p',
        text: 'Cuando una de las brujas te lance la llama de fuego tendrás que cubrirte con el escudo espejo para que rebote, de forma que le dé a la bruja de hielo. Y cuando la bruja de hielo te lance el chorro de hielo, cúbrete con el escudo espejo y desvía el disparo hacia la bruja de fuego. Este proceso lo tienes que repetir 3 veces aproximadamente, y después las brujas se juntarán y formarán una sola bruja que lanza hielo y fuego.',
        image: require('../../assets/gerundo/86.png')
      },
      {
        id: 'p',
        text: 'Cuando el enemigo sea una sola bruja te lanzará tres ataques de hielo seguidos y después tres de fuego. Para derrotarla, tienes que parar con el escudo espejo tres ataques seguidos para que se acumule energía en él (tienen que ser tres de hielo o tres de fuego). Una vez acumules tres ataques del mismo tipo en el escudo, saldrá un rayo con el que tendrás que dar a la bruja para inmovilizarla durante un tiempo. Cuando esté inmovilizada, podrás usar el supergancho sobre ella para llegar rápidamente a su lado y después la tendrás que golpear continuamente con la espada. Este ataque lo tendrás que repetir 5 veces.',
        image: require('../../assets/gerundo/87.png')
      },
      {
        id: 'p',
        text: 'Tras derrotar a las Hermanas hechiceras Birova aparecerá un contenedor de corazón y un haz de luz que te llevará a la Sala de los Sabios, lugar donde aparecerá Nabooro, la sabia del espíritu, la cual te recompensará con el Medallón del Espíritu.',
        image: require('../../assets/gerundo/88.png')
      },

    ]
  },
  {
    id: 'adult_9',
    title: 'Acceso al castillo Ganon',
    location: 'Hyrule',
    era: 'Adulto',
    requirements: '6 Medallones',
    keyItems: ['Flechas de Luz'],
    steps:[
      {
        id: 'p',
        text: 'Después de completar el Templo del Espíritu aparecerás en el exterior del templo.',
        image: require('../../assets/ganon/1.png')
      },
      {
        id: 'p',
        text: 'Ahora tendrás que volver al Templo del Tiempo tocando con la ocarina el Preludio de la luz. Al hacerlo, te encontrarás con Sheik, el cual te contará una historia sobre los Sheikans.',
        image: require('../../assets/ganon/2.png')
      },
      {
        id: 'p',
        text: 'Después de contarte la historia verás como Sheik se transforma en Zelda (realmente Sheik es la princesa Zelda transformada).',
        image: require('../../assets/ganon/3.png')
      },
      {
        id: 'p',
        text: 'Al hablar con ella te confesará que es la séptima sabia y seguidamente te dará la flecha de luz.',
        image: require('../../assets/ganon/4.png')
      },
      {
        id: 'p',
        text: 'Después de que Zelda te dé la flecha de luz se oirá la voz de Ganondorf y la princesa desaparecerá. A continuación, Ganondorf te dirá que si quieres volver a verla tendrás que ir su castillo.',
        image: require('../../assets/ganon/5.png')
      },
      {
        id: 'p',
        text: 'Cuando retomes el control de tu personaje tendrás que salir del templo y al llegar a la plaza del mercado.',
        image: require('../../assets/ganon/6.png')
      },
      {
        id: 'p',
        text: 'Luego continúa por el camino de la izquierda para llegar al castillo de Ganon y, al acercarte al abismo que está en la entrada del castillo, oirás la voz de Rauru, el Sabio, el cual te dirá que va a construir un puente para que puedas entrar en el Castillo con el poder de los seis Sabios.',
        image: require('../../assets/ganon/7.png')
      },
      {
        id: 'p',
        text: 'Rauru también te dirá que la Torre de Ganon está protegida por seis barreras malignas que tendrás que destruir. Seguidamente, cruza el puente de luz para llegar al interior del castillo de Ganon.',
        image: require('../../assets/ganon/8.png')
      },
      {
        id: 'p',
        text: 'Después de que los seis sabios construyan el puente de luz, podrás entrar en el interior del castillo de Ganon.',
        image: require('../../assets/ganon/9.png')
      },
      {
        id: 'p',
        text: 'Al entrar en el castillo verás que hay una habitación circular en la que hay una torre central y seis puertas en las paredes laterales (aunque solo se ven cinco).',
        image: require('../../assets/ganon/10.png')
      },
      {
        id: 'p',
        text: 'Sobre cada puerta hay un medallón como los que has conseguido al rescatar a los sabios, y de la parte superior de cada puerta sale un rayo de luz que crea un escudo protector que te impide pasar a la torre del centro. El objetivo es entrar en cada una de estas puertas para volver a rescatar a los Sabios. El mejor orden para completar estas habitaciones es empezar por la puerta de la derecha y después seguir visitando las puertas en el sentido contrario a las agujas del reloj (verde, azul, morado, rojo, amarillo y naranja). Cuando rescates a todos los Sabios, el escudo que protege la torre del centro desaparecerá y podrás entrar en su interior.',
        image: require('../../assets/ganon/11.png')
      },
      {
        id: 'p',
        text: 'El objetivo es entrar en cada una de estas puertas para volver a rescatar a los Sabios. El mejor orden para completar estas habitaciones es empezar por la puerta de la derecha y después seguir visitando las puertas en el sentido contrario a las agujas del reloj (verde, azul, morado, rojo, amarillo y naranja).',
        image: require('../../assets/ganon/12.png')
      },
      {
        id: 'p',
        text: 'Al entrar por la puerta que tiene encima el medallón verde llegarás a una habitación en la que hay un lobo y muchas antorchas apagadas (al eliminar al lobo aparecerá un cofre que contiene una rupia azul). ',
        image: require('../../assets/ganon/13.png')
      },
      {
        id: 'p',
        text: 'Para poder abrir la puerta de salida tienes que encender todas las antorchas usando la magia fuego de Din, y la antorcha que está sobre la puerta de salida la podrás encender disparándole una flecha de fuego. También podrás encenderla haciendo que una flecha normal atraviese una antorcha encendida para después hacer blanco en la antorcha apagada.',
        image: require('../../assets/ganon/14.png')
      },
      {
        id: 'p',
        text: 'Cuando la puerta se abra, métete por ella y llegarás a una habitación en la que hay rupias plateadas y ventiladores en las paredes.',
        image: require('../../assets/ganon/15.png')
      },
      {
        id: 'p',
        text: 'Para coger las rupias plateadas tienes que ponerte las botas voladoras para poder flotar durante un tiempo (has de tener cuidado porque hay unos ventiladores que de vez en cuando se ponen en funcionamiento y te pueden empujar). Para coger una de las rupias tienes que pisar un interruptor que está en la plataforma del fondo a la izquierda. Al pisarla aparecerá un poste con una diana en la que te puedes agarrar con el supergancho. Cuando cojas todas las rupias, se abrirá una puerta para que puedas continuar. En la siguiente habitación verás un rayo verde que tiene un núcleo en el centro. Dispara una flecha de luz al núcleo, y así podrás rescatar a Saria.',
        image: require('../../assets/ganon/16.png')
      },
      {
        id: 'p',
        text: 'Tras rescatar a Saria aparecerás fuera de la puerta del medallón verde y verás como el rayo que está sobre la puerta desaparece. ',
        image: require('../../assets/ganon/17.png')
      },
      {
        id: 'p',
        text: 'Al entrar por la puerta del medallón azul llegarás a una habitación que en el centro tiene una antorcha con fuego azul, el cual tienes que meter dentro de una botella. Con él podrás derretir el hielo rojo que hay en una de las paredes.',
        image: require('../../assets/ganon/18.png')
      },
      {
        id: 'p',
        text: 'Tras derretir el hielo rojo verás que detrás hay una puerta con una reja que desaparecerá al eliminar a todos los enemigos de hielo. Cuando la reja se quite, métete por la puerta y llegarás a una habitación en la que hay dos bloques de hielo que puedes empujar, una puerta con rejas y un pasillo cubierto con hielo rojo (al entrar en esta habitación aparecer un marcador de tiempo que indica 2 minutos).',
        image: require('../../assets/ganon/19.png')
      },
      {
        id: 'p',
        text: 'El bloque de hielo que está más lejos lo tienes que empujar hacia la derecha para que se choque con una piedra, y después debes empujarlo para tirarlo dentro del agujero cuadrado que está en el centro de la habitación. A continuación, empuja el otro bloque hacia donde estaba el agujero en el suelo y se chocará con una piedra, y después empújalo hacia la pared de la puerta con reja y se chocará con otra piedra. Por último, empújalo para que se quede debajo del hielo rojo.',
        image: require('../../assets/ganon/20.png')
      },
      {
        id: 'p',
        text: 'Cuando esté debajo del hielo rojo, súbete sobre el bloque y derrite el hielo usando fuego azul (lo podrás meter dentro de una botella en la habitación anterior). Al derretirlo, verás un interruptor que tienes que pulsar con el Martillo, cosa que abrirá la puerta con rejas. Recuerda que tienes que conseguirlo antes de que el tiempo llegue a 0. Cuando te metas por la puerta que se ha abierto llegarás a una habitación en la que hay un rayo azul que en el centro tiene un núcleo al que debes dispararle una flecha de luz. Así rescatarás a Ruto.',
        image: require('../../assets/ganon/21.png')
      },
      {
        id: 'p',
        text: 'Tras rescatar a Ruto, aparecerás fuera de la puerta del medallón azul y verás como el rayo que está sobre la puerta desaparece.',
        image: require('../../assets/ganon/22.png')
      },
      {
        id: 'p',
        text: 'Al entrar por la puerta del medallón morado llegarás a una habitación en la que hay un gran abismo en el que hay una calavera rodeada por fuego verde.',
        image: require('../../assets/ganon/23.png')
      },
      {
        id: 'p',
        text: 'Una vez allí, lanza una flecha de fuego a la antorcha apagada que está en la pared de la derecha para encenderla, y así aparecerá un camino que te lleva a una plataforma en la que hay un Like Like (es un enemigo perecido a un gusano blanco).',
        image: require('../../assets/ganon/24.png')
      },
      {
        id: 'p',
        text: 'Desde dicha plataforma, lanza otra flecha de fuego para volver a encender la antorcha (es la misma antorcha que encendiste antes) y entonces aparecerá un bloque para llegar a la siguiente plataforma.',
        image: require('../../assets/ganon/25.png')
      },
      {
        id: 'p',
        text: 'Cuando cruces a esa plataforma debes seguir por los bloques que han aparecido hasta llegar a una pequeña plataforma sobre la que hay un interruptor. Al pulsarlo, aparecerá un cofre grande sobre la plataforma anterior, y en su interior encontrarás los Guantes de Oro (para llegar al cofre usa el supergancho para agarrarte a él).',
        image: require('../../assets/ganon/26.png')
      },
      {
        id: 'p',
        text: 'Tras conseguir los guantes, usa la Lupa de la Verdad y verás que a los lados de esta plataforma aparecen dos caminos invisibles. El camino que está más alejado del cofre te lleva a una plataforma en la que hay un interruptor oxidado que debes pulsar con el Martillo. Al hacerlo, se abrirá la puerta de salida a la que podrás llegar por el otro camino que ha aparecido o usando el supergancho para agarrarte a la antorcha que está junto a la puerta.',
        image: require('../../assets/ganon/27.png')
      },
      {
        id: 'p',
        text: 'Al meterte por esa puerta llegarás a una habitación en la que hay un rayo morado que en el centro tiene un núcleo al que debes dispararle una flecha de luz. Así rescatarás a Impa (la guardiana de Zelda).',
        image: require('../../assets/ganon/28.png')
      },
      {
        id: 'p',
        text: 'Tras rescatar a Impa aparecerás fuera de la puerta del medallón morado y verás cómo el rayo que está sobre la puerta desaparece.',
        image: require('../../assets/ganon/29.png')
      },
      {
        id: 'p',
        text: 'Al entrar en la puerta del medallón rojo tendrás que ponerte el sayo goron para que no te baje la energía (si no lo tienes puesto aparece un contador y cuando llegue a 0 morirás). En la primera habitación tienes que coger cinco rupias plateadas para que se abra la puerta de salida.',
        image: require('../../assets/ganon/30.png')
      },
      {
        id: 'p',
        text: 'Las rupias están sobre plataformas que se hunden al pisarlas y se vuelven a elevar cuando dejas de hacerlo. Hay una rupia que no se ve, y para encontrarla tienes que levantar con los Guantes de Oro una columna muy grande que está en la pared de la izquierda. Además de encontrar esa rupia, podrás coger las que están en al lado derecho de la habitación, ya que esta columna se quedará entre dos plataformas que estaban muy separadas.',
        image: require('../../assets/ganon/31.png')
      },
      {
        id: 'p',
        text: 'Tras coger las rupias, usa el supergancho para agarrarte en la diana que está al lado de la puerta de salida y así llegarás a una habitación en la que hay un rayo rojo que en el centro tiene un núcleo',
        image: require('../../assets/ganon/32.png')
      },
      {
        id: 'p',
        text: 'Dispara una flecha de luz al núcleo y así rescatarás a Darunia, el rey de los Goron.',
        image: require('../../assets/ganon/33.png')
      },
      {
        id: 'p',
        text: 'Tras rescatar a Darunia, aparecerás fuera de la puerta del medallón rojo y verás cómo el rayo que está sobre la puerta desaparece.',
        image: require('../../assets/ganon/34.png')
      },
      {
        id: 'p',
        text: 'Esta puerta no se ve, ya que esta detrás de una columna gris muy grande. Para que aparezca tienes que levantar la columna gris que está al lado de la puerta del medallón rojo (solo podrás levantar la columna si tienes los Guantes de Oro).',
        image: require('../../assets/ganon/35.png')
      },
      {
        id: 'p',
        text: 'En la primera habitación verás que hay seis cofres, enemigos invisibles y una puerta con cerradura. Con la Lupa de la Verdad podrás ver a los enemigos, y cuando los elimines, aparecerá un cofre en el centro de la habitación que contiene una llave pequeña (hay tres murciélagos y una araña gigante). En la habitación hay otros seis cofres, pero no contienen nada importante.',
        image: require('../../assets/ganon/36.png')
      },
      {
        id: 'p',
        text: 'Con la llave podrás abrir la puerta con cerradura para llegar a la siguiente habitación, lugar donde encontrarás otra puerta con cerradura y un símbolo de la Trifuerza dibujado en el suelo.en el suelo. Si te colocas sobre el símbolo y tocas con la ocarina la Nana de Zelda, aparecerá un cofre que contiene la llave pequeña con la que puedes abrir la puerta.',
        image: require('../../assets/ganon/37.png')
      },
      {
        id: 'p',
        text: 'Al meterte por la puerta llegarás a una habitación en la que tienes que coger cinco rupias plateadas para que se abra la puerta con rejas (para coger la rupia que está más alta tienes que usar el supergancho para agarrarte a la diana que hay en el techo).',
        image: require('../../assets/ganon/38.png')
      },
      {
        id: 'p',
        text: 'Cuando la puerta se abra tendrás que meterte por ella para llegar a una habitación en la que no hay nada. Pero si miras con la Lupa de la Verdad a la pared del fondo, descubrirás que hay pasillo invisible (si tardas mucho en salir de esta habitación caerá una mano que si te coge te llevará a la entrada del castillo)',
        image: require('../../assets/ganon/39.png')
      },
      {
        id: 'p',
        text: 'Este pasillo te lleva a una habitación en la que hay un rayo amarillo que en el centro tiene un núcleo al que debes dispararle una flecha de luz. Así rescatarás a Rauru.',
        image: require('../../assets/ganon/40.png')
      },
      {
        id: 'p',
        text: 'Tras rescatar a Rauru, aparecerás fuera de la puerta del medallón amarillo y verás como el rayo que está sobre la puerta desaparece.',
        image: require('../../assets/ganon/41.png')
      },
      {
        id: 'p',
        text: 'En la primera habitación hay pinchos que se mueven, estatuas que se pueden empujar y una estatua que lanza rayos. Allí tienes que coger cinco rupias plateadas para que se abra la puerta con rejas que te lleva a la siguiente habitación. Para coger la rupia que está sobre la estatua que lanza rayos tienes que agarrarte con el supergancho a la diana que hay en el techo.',
        image: require('../../assets/ganon/42.png')
      },
      {
        id: 'p',
        text: 'En la siguiente habitación hay dos interruptores con forma de rombo: uno en la entrada y otro detrás de una reja. Al activar el primer interruptor con la espada aparecerá un cofre que contiene el bombuchu.',
        image: require('../../assets/ganon/43.png')
      },
      {
        id: 'p',
        text: 'A continuación, utilízalo para que pase por el hueco que hay encima de la reja y de esta forma harás que llegue al segundo interruptor (el bombuchu tiene que explotar al lado del interruptor, por lo que debes soltarlo después de tenerlo un rato en las manos).',
        image: require('../../assets/ganon/44.png')
      },
      {
        id: 'p',
        text: 'Al pulsar el segundo interruptor se abrirá la puerta con rejas, y al meterte por ella llegarás a una habitación en la que hay soles en la pared.',
        image: require('../../assets/ganon/45.png')
      },
      {
        id: 'p',
        text: 'En esta habitación tienes que lanzar una flecha de fuego para romper la telaraña que hay en el centro del techo y al hacerlo entrará un rayo de luz.',
        image: require('../../assets/ganon/46.png')
      },
      {
        id: 'p',
        text: 'A continuación, usa el escudo espejo para que se refleje la luz en él, y con el reflejo ilumina los soles que están en la pared. Si iluminas el sol correcto se abrirá la puerta con rejas, pero si iluminas el incorrecto aparecerá una mano que si te coge te llevará a la entrada del castillo.',
        image: require('../../assets/ganon/47.png')
      },
      {
        id: 'p',
        text: 'Cuando te metas por esta puerta llegarás a una habitación en la que hay un rayo naranja que en el centro tiene un núcleo al que debes dispararle una flecha de luz. Así rescatarás a Nabooru, la guerrera gerudo.',
        image: require('../../assets/ganon/48.png')
      },
      {
        id: 'p',
        text: 'Cuando todos los rayos hayan desaparecido podrás entrar al interior de la Torre de Ganon.',
        image: require('../../assets/ganon/49.png')
      },
      {
        id: 'p',
        text: 'El interior de la torre no tiene pérdida, ya que solo hay un camino. Cuando entres en las habitaciones verás puertas con rejas que se abren eliminando a todos los enemigos que se encuentran en ellas.',
        image: require('../../assets/ganon/50.png')
      },
      {
        id: 'p',
        text: 'En una de las habitaciones hay un cofre rodeado por fuego. Al eliminar a los dos esqueletos que hay allí dentro el fuego desaparecerá, y al abrir el cofre amarillo y azul, encontrarás la gran llave.',
        image: require('../../assets/ganon/51.png')
      },
      {
        id: 'p',
        text: 'Cuando llegues a la parte superior de la torre verás la puerta del jefe, la cual podrás abrir con la gran llave que conseguiste anteriormente. Al hacerlo, llegarás a una habitación en la que hay otra puerta que te lleva a un pasillo con escaleras',
        image: require('../../assets/ganon/52.png')
      },
      {
        id: 'p',
        text: 'Métete por la puerta que hay al final del pasillo y así llegarás a una habitación en la que encontrarás a Ganondorf tocando un órgano (sobre él verás a Zelda encerrada en una especie de diamante de luz).',
        image: require('../../assets/ganon/53.png')
      },
      {
        id: 'p',
        text: 'Seguidamente te tendrás que enfrentar al enemigo final del juego: GANONDORF.',
        image: require('../../assets/ganon/54.png')
      },
      {
        id: 'p',
        text: '1.ª Transformación: Cuando empieces a luchar, Ganondorf romperá el suelo de la habitación y tendrás que ponerte en una de las esquinas. A continuación, Ganondorf te lanzará una bola de energía y tendrás que devolvérsela golpeándola con la espada. ',
        image: require('../../assets/ganon/55.png')
      },
      {
        id: 'p',
        text: 'Él también te la suele devolver, por lo que tendrás que darle varias veces como si estuvieses jugando al tenis. Al devolvérsela, conseguirás que le dé un golpe y lo electrocutará. Cuando esté rodeado de rayos tras darle el golpe le tendrás que dispara rápidamente una flecha de luz para que caiga al suelo aturdido.',
        image: require('../../assets/ganon/56.png')
      },
      {
        id: 'p',
        text: 'Cuando caiga al suelo aturdido usa el supergancho para agarrarte a él, y cuando estés a su lado golpéale con la espada. Una vez Ganon se recupere, tendrás que volver a una de las esquinas de la habitación agarrándote con el supergancho a las vidrieras. Este proceso lo tienes que repetir 10 veces. Si te quedas sin barra de magia no podrás lanzar flecha de luz, y para rellenarla tendrás que bajar a la zona inferior para buscar dentro de las vasijas. Cada vez que le das un golpe a Ganondorf, este golpeará el suelo y hará desaparecer algunas partes de la plataforma donde tú estás subido. De vez en cuando, Ganondorf crea una bola negra sobre su cabeza y te lanza varios rayos verdes. Para esquivarlos, tienes que engancharte con el supergancho a la esquina más cercana justo cuando los vaya a lanzar.',
        image: require('../../assets/ganon/57.png')
      },
      {
        id: 'p',
        text: 'Tras derrotar a Ganondorf en su primera forma, aparecerás en lo alto de la torre junto a Zelda. Cuando hables con ella, la torre empezará a temblar y la princesa te dirá que tenéis que escapar. ',
        image: require('../../assets/ganon/58.png')
      },
      {
        id: 'p',
        text: 'A continuación, la tendrás que seguir para que ella te lleve hasta la base de la torre antes de que el tiempo llegue a 0 (te dan 3 minutos). Cuando vayas siguiendo a Zelda te irá esperando hasta que te acerques a ella, es decir, que es imposible perderla de vista.',
        image: require('../../assets/ganon/59.png')
      },
      {
        id: 'p',
        text: 'A medida que vayas avanzado, Zelda abrirá unas rejas que tú anteriormente no podías abrir. En algunas habitaciones, Zelda se meterá dentro de un campo de energía debido a que hay enemigos.',
        image: require('../../assets/ganon/60.png')
      },
      {
        id: 'p',
        text: 'Para poder continuar tendrás que eliminar a esos enemigos rápidamente',
        image: require('../../assets/ganon/61.png')
      },
      {
        id: 'p',
        text: 'Cuando llegues a la base, verás como la torre se hunde y parecerá que el juego ha llegado a su fin, pero es falso, ya que al acercarte al centro de la plataforma en la que te encuentras aparecerá Ganondorf y se transformará en una especie de bestia.',
        image: require('../../assets/ganon/62.png')
      },
      {
        id: 'p',
        text: '2.ª Transformación: Cuando Ganondorf se transforme, un muro de fuego te rodeará y no podrás usar la espada, ya que un golpe de este enemigo la hará caer fuera del círculo de fuego.',
        image: require('../../assets/ganon/63.png')
      },
      {
        id: 'p',
        text: 'Para derrotarle, tienes que dispararle una flecha de luz a los ojos para aturdirle (para que sea más sencillo, fija el blanco manteniendo el botón "L" pulsado).',
        image: require('../../assets/ganon/64.png')
      },
      {
        id: 'p',
        text: 'Cuando esté aturdido le tienes que golpear en la cola con el Martillo. Este ataque lo tienes que repetir 10 veces.',
        image: require('../../assets/ganon/65.png')
      },
      {
        id: 'p',
        text: '* Nota: Si te quedas sin flechas o sin magia puedes esconderte detrás de las columnas de los lados para que Ganondorf la rompa con su espada. Así aparecerán objetos. Tras golpearle 10 veces, el muro de fuego desaparecerá y podrás recuperar la espada.',
        image: require('../../assets/ganon/66.png')
      },
      {
        id: 'p',
        text: '3.ª Transformación: Ahora tendrás que golpear a Ganondorf en la cola con la espada en lugar de hacerlo con el martillo.',
        image: require('../../assets/ganon/67.png')
      },
      {
        id: 'p',
        text: 'En este combate también le tendrás que dar 10 golpes, y cuando lo logres, Zelda te dirá que le des el último golpe. Cuando lo haga, ponte frente a Ganondorf y dale un golpe con la Espada Maestra.',
        image: require('../../assets/ganon/68.png')
      },
      {
        id: 'p',
        text: 'Seguidamente, los sabios usarán su poder para mandar a Ganondorf al Reino del Mal y lo sellarán para que no pueda volver.',
        image: require('../../assets/ganon/69.png')
      },
      {
        id: 'p',
        text: 'Y a continuación, Zelda le pedirá la ocarina a Link y tocará una melodía para devolverle a su mundo siete años atrás.',
        image: require('../../assets/ganon/70.png')
      },
      {
        id: 'p',
        text: 'Después verás una secuencia final en la que Link vuelve a dejar la Espada Maestra en el pedestal del Templo del Tiempo y finalizará el juego.',
        image: require('../../assets/ganon/71.png')
      },
      {
        id: 'p',
        text: 'Tras ver los créditos del juego, aparecerá un mensaje en pantalla indicando que se ha desbloqueado el modo de juego "The Legend of Zelda Ocarina of Time 3D Master Quest"',
        image: require('../../assets/ganon/72.png')
      },
      {
        id: 'p',
        text: 'Después de la pantalla del título podrás elegir jugar al juego normal o al nuevo modo que ha aparecido.',
        image: require('../../assets/ganon/73.png')
      },

    ]

  }
];