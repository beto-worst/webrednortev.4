import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y Condiciones de uso del sitio web rednorte.mx de Rednorte Inmobiliaria.',
  alternates: { canonical: '/terminos-y-condiciones' },
};

export default function TerminosPage() {
  return (
    <div className="page-content">
      <Breadcrumb items={[{ label: 'Términos y condiciones' }]} />
      <div className="legal-page">
        <h1>Términos y Condiciones de Uso</h1>
        <p className="legal-date">Última actualización: 13 de agosto de 2026</p>
        <div className="legal-section">
          <p>Los presentes Términos y Condiciones regulan el acceso, navegación y uso del sitio web rednorte.mx, así como de las páginas, herramientas, formularios, contenidos y funcionalidades relacionadas con el mismo.</p>
          <p>El sitio es operado por Red de Administración y Compraventa, S.A. de C.V., bajo el nombre comercial Rednorte Inmobiliaria, con RFC RAC230525TH3, con domicilio en Av. José Vasconcelos Ote. 215, Local 7, Residencial San Agustín 1er Sector, C.P. 66260, San Pedro Garza García, Nuevo León.</p>
          <p>Al acceder y utilizar este sitio, el usuario reconoce haber leído los presentes Términos y Condiciones. Cuando una funcionalidad, herramienta o servicio requiera aceptación expresa de condiciones adicionales, éstas serán presentadas al usuario antes de utilizarla.</p>
        </div>
        <div className="legal-section">
          <h2>I. Objeto del sitio</h2>
          <p>Rednorte.mx tiene como finalidad proporcionar información relacionada con servicios inmobiliarios, propiedades en venta y renta, herramientas de orientación inmobiliaria, análisis de mercado, contenidos informativos, perfiles de asesores y medios de contacto con Rednorte Inmobiliaria.</p>
          <p>A través del sitio, los usuarios podrán, entre otras funciones:</p>
          <ul>
            <li>Consultar propiedades disponibles para venta o renta.</li>
            <li>Buscar inmuebles residenciales, comerciales e industriales.</li>
            <li>Solicitar información sobre una propiedad.</li>
            <li>Contactar a asesores inmobiliarios.</li>
            <li>Solicitar servicios para vender o rentar una propiedad.</li>
            <li>Utilizar herramientas de estimación de valor.</li>
            <li>Utilizar herramientas de análisis o diagnóstico de vendibilidad.</li>
            <li>Consultar artículos, reportes, preguntas frecuentes y contenidos sobre el mercado inmobiliario.</li>
            <li>Enviar formularios de contacto o solicitudes de servicio.</li>
            <li>Consultar información sobre el equipo de Rednorte Inmobiliaria.</li>
          </ul>
          <p>La disponibilidad de las funcionalidades podrá cambiar con el tiempo.</p>
        </div>
        <div className="legal-section">
          <h2>II. Información de propiedades</h2>
          <p>Rednorte Inmobiliaria procura que la información publicada sobre las propiedades sea clara, actualizada y razonablemente precisa. No obstante, parte de la información puede provenir de propietarios, desarrolladores, otras inmobiliarias, asesores, sistemas CRM, portales, bases de datos o terceros relacionados con la comercialización del inmueble.</p>
          <p>Los precios, disponibilidad, superficies, características, fotografías, amenidades, ubicaciones, condiciones comerciales y demás información de los inmuebles pueden modificarse sin previo aviso.</p>
          <p>La publicación de una propiedad en el sitio no constituye una oferta contractual definitiva ni garantiza su disponibilidad.</p>
          <p>Antes de tomar una decisión de compra, renta, inversión o realizar cualquier pago, el usuario deberá confirmar con un asesor de Rednorte las condiciones vigentes de la propiedad y revisar la documentación correspondiente.</p>
          <p>Las fotografías, renders, planos, mobiliario, dimensiones y demás elementos gráficos podrán tener fines ilustrativos cuando así corresponda.</p>
        </div>
        <div className="legal-section">
          <h2>III. Sincronización del inventario</h2>
          <p>Parte del inventario publicado en rednorte.mx puede sincronizarse con sistemas internos, CRM y fuentes de terceros.</p>
          <p>Aunque Rednorte procura mantener el inventario actualizado, pueden existir periodos razonables entre un cambio en la situación de una propiedad y su actualización en el sitio.</p>
          <p>Por lo anterior, una propiedad mostrada como disponible podría encontrarse temporalmente en negociación, reservada, vendida, rentada o sujeta a cambios de precio o condiciones.</p>
          <p>La disponibilidad deberá confirmarse directamente con Rednorte Inmobiliaria.</p>
        </div>
        <div className="legal-section">
          <h2>IV. Estimador de valor inmobiliario</h2>
          <p>Las herramientas de estimación de valor disponibles en rednorte.mx tienen fines exclusivamente informativos y de orientación inicial.</p>
          <p>Los resultados pueden considerar información proporcionada por el usuario, características del inmueble, datos de mercado, referencias inmobiliarias, propiedades comparables, parámetros estadísticos y otras fuentes disponibles al momento de realizar el análisis.</p>
          <p>El resultado constituye una estimación orientativa de valor comercial y:</p>
          <ul>
            <li>No constituye un avalúo certificado.</li>
            <li>No constituye un avalúo bancario, fiscal, judicial o catastral.</li>
            <li>No garantiza el precio al que una propiedad pueda venderse o rentarse.</li>
            <li>No sustituye la inspección física del inmueble.</li>
            <li>No sustituye una opinión profesional personalizada cuando ésta resulte necesaria.</li>
          </ul>
          <p>Los resultados pueden variar dependiendo de la calidad y exactitud de la información proporcionada, las condiciones del inmueble y los cambios en el mercado.</p>
        </div>
        <div className="legal-section">
          <h2>V. Reporte de vendibilidad</h2>
          <p>La herramienta de análisis o reporte de vendibilidad tiene como finalidad orientar al propietario respecto de distintos factores que pueden influir en la comercialización de un inmueble.</p>
          <p>El análisis podrá considerar variables como precio, competencia, presentación, fotografías, documentación, ubicación, demanda, tiempo en mercado, condiciones comerciales, accesibilidad para visitas y estrategia de promoción.</p>
          <p>La calificación o resultado obtenido es una herramienta de diagnóstico y no constituye una garantía de venta, renta, precio, plazo, número de prospectos o cierre de operación.</p>
          <p>Las recomendaciones generadas deberán interpretarse como orientación y podrán complementarse mediante una revisión profesional de la propiedad y del mercado.</p>
        </div>
        <div className="legal-section">
          <h2>VI. Servicios inmobiliarios</h2>
          <p>La consulta del sitio, el envío de un formulario, una conversación por WhatsApp, la utilización de una herramienta o la solicitud de información no formalizan por sí mismas una operación inmobiliaria ni un contrato de prestación de servicios.</p>
          <p>Cuando corresponda, la relación entre Rednorte Inmobiliaria y el cliente se documentará mediante los contratos, autorizaciones, cartas, convenios o instrumentos aplicables a cada operación.</p>
          <p>Los términos específicos de comisiones, exclusividad, vigencia, obligaciones de las partes, promoción, colaboración inmobiliaria y demás condiciones serán establecidos en la documentación correspondiente.</p>
        </div>
        <div className="legal-section">
          <h2>VII. Información para inversionistas</h2>
          <p>Los análisis, publicaciones, cálculos de rendimiento, comparaciones, escenarios, información sobre preventas, plusvalía, retorno de inversión u oportunidades inmobiliarias disponibles en el sitio tienen fines informativos.</p>
          <p>El desempeño histórico de una propiedad, zona o desarrollo no garantiza resultados futuros.</p>
          <p>Cada inversionista deberá considerar su situación financiera, objetivos, tolerancia al riesgo, horizonte de inversión y obtener, cuando corresponda, asesoría legal, fiscal, financiera o especializada antes de realizar una operación.</p>
        </div>
        <div className="legal-section">
          <h2>VIII. Información legal, fiscal, notarial y para extranjeros</h2>
          <p>Los contenidos publicados por Rednorte sobre requisitos documentales, compraventas, arrendamientos, trámites notariales, financiamientos, adquisición de inmuebles por extranjeros, trámites ante autoridades u otros procedimientos tienen fines generales de orientación.</p>
          <p>Dicha información no sustituye la asesoría de un abogado, notario, contador, institución financiera, autoridad o especialista competente cuando la naturaleza de la operación así lo requiera.</p>
          <p>Los requisitos y procedimientos pueden variar según la persona, inmueble, ubicación, operación y disposiciones aplicables.</p>
        </div>
        <div className="legal-section">
          <h2>IX. Información proporcionada por el usuario</h2>
          <p>El usuario se compromete a proporcionar información verdadera, suficiente y actualizada cuando utilice formularios, herramientas o medios de contacto del sitio.</p>
          <p>Rednorte no será responsable de resultados, estimaciones o recomendaciones incorrectas que deriven directamente de información incompleta, falsa, desactualizada o inexacta proporcionada por el usuario.</p>
          <p>El tratamiento de los datos personales se realizará conforme al Aviso de Privacidad Integral de Rednorte Inmobiliaria.</p>
        </div>
        <div className="legal-section">
          <h2>X. Reseñas y testimonios</h2>
          <p>El sitio podrá mostrar reseñas, testimonios y opiniones provenientes de Google u otras plataformas.</p>
          <p>Cuando las reseñas provengan de una plataforma externa, se procurará identificar su fuente.</p>
          <p>Las opiniones pertenecen a sus respectivos autores y reflejan experiencias individuales. La publicación de una reseña no implica que los mismos resultados puedan garantizarse a otros clientes u operaciones.</p>
        </div>
        <div className="legal-section">
          <h2>XI. Propiedad intelectual</h2>
          <p>El contenido del sitio, incluyendo textos, logotipos, marcas, diseños, herramientas, metodologías, reportes, bases de datos, fotografías propias, videos, gráficos, cálculos, interfaces, código, materiales comerciales y demás elementos desarrollados por Rednorte se encuentra protegido por la legislación aplicable.</p>
          <p>Salvo autorización expresa, el usuario no podrá copiar, reproducir, modificar, distribuir, comercializar, extraer sistemáticamente, republicar o utilizar dichos contenidos para fines comerciales.</p>
          <p>Las fotografías, marcas, planos, renders y materiales pertenecientes a terceros serán propiedad de sus respectivos titulares y se utilizarán conforme a los derechos o autorizaciones correspondientes.</p>
        </div>
        <div className="legal-section">
          <h2>XII. Uso permitido del sitio</h2>
          <p>El usuario se obliga a utilizar el sitio de manera lícita y de buena fe. Queda prohibido:</p>
          <ul>
            <li>Intentar acceder sin autorización a sistemas, cuentas, servidores o bases de datos.</li>
            <li>Introducir código malicioso, virus o herramientas destinadas a alterar el funcionamiento del sitio.</li>
            <li>Realizar extracción automatizada masiva de inventario o información sin autorización.</li>
            <li>Suplantar la identidad de otra persona.</li>
            <li>Utilizar formularios para enviar información falsa, fraudulenta, ofensiva o ilícita.</li>
            <li>Utilizar contenidos, bases de datos o herramientas de Rednorte para fines contrarios a derecho.</li>
          </ul>
          <p>Rednorte podrá restringir el acceso cuando detecte usos abusivos, fraudulentos o que comprometan la seguridad del sitio.</p>
        </div>
        <div className="legal-section">
          <h2>XIII. Enlaces y servicios de terceros</h2>
          <p>El sitio puede contener enlaces o integraciones con plataformas externas, incluyendo servicios de mapas, redes sociales, WhatsApp, Google, portales inmobiliarios, herramientas de reseñas y otros proveedores tecnológicos.</p>
          <p>Rednorte no controla las políticas, disponibilidad, funcionamiento o contenido de los sitios externos, por lo que el acceso a éstos estará sujeto a sus propios términos y políticas.</p>
        </div>
        <div className="legal-section">
          <h2>XIV. Disponibilidad del sitio</h2>
          <p>Rednorte procura mantener el sitio disponible y funcionando correctamente; sin embargo, podrán existir interrupciones temporales por mantenimiento, actualizaciones, fallas técnicas, servicios de terceros, causas de fuerza mayor o circunstancias fuera de su control razonable.</p>
          <p>Rednorte podrá modificar, actualizar, suspender o retirar funcionalidades cuando resulte necesario.</p>
        </div>
        <div className="legal-section">
          <h2>XV. Responsabilidad</h2>
          <p>Rednorte Inmobiliaria procurará mantener información razonablemente precisa y ofrecer sus servicios con diligencia profesional.</p>
          <p>Sin perjuicio de los derechos que correspondan al usuario conforme a la legislación aplicable, Rednorte no garantiza que:</p>
          <ul>
            <li>Todas las propiedades mostradas se encuentren disponibles en todo momento.</li>
            <li>Una propiedad pueda venderse o rentarse en un plazo determinado.</li>
            <li>Se obtenga un precio específico.</li>
            <li>Una inversión produzca determinado rendimiento.</li>
            <li>Los resultados de las herramientas coincidan exactamente con una operación futura.</li>
            <li>Los servicios o plataformas de terceros permanezcan disponibles de manera ininterrumpida.</li>
          </ul>
          <p>Nada de lo establecido en estos Términos pretende excluir o limitar derechos irrenunciables que correspondan a consumidores o usuarios conforme a la legislación aplicable.</p>
        </div>
        <div className="legal-section">
          <h2>XVI. Protección de datos personales</h2>
          <p>El tratamiento de datos personales realizado mediante rednorte.mx se regirá por el <Link href="/aviso-de-privacidad" style={{ color: 'var(--terracota)' }}>Aviso de Privacidad Integral</Link> de Rednorte Inmobiliaria, disponible en el sitio.</p>
          <p>El uso de cookies y tecnologías similares se encuentra adicionalmente regulado por la <Link href="/politica-de-cookies" style={{ color: 'var(--terracota)' }}>Política de Cookies</Link>.</p>
        </div>
        <div className="legal-section">
          <h2>XVII. Modificaciones</h2>
          <p>Rednorte podrá modificar estos Términos y Condiciones cuando existan cambios operativos, tecnológicos, comerciales, legales o en las funcionalidades del sitio.</p>
          <p>La versión vigente indicará su fecha de última actualización y estará disponible permanentemente en rednorte.mx.</p>
        </div>
        <div className="legal-section">
          <h2>XVIII. Legislación aplicable</h2>
          <p>Los presentes Términos y Condiciones se regirán por las leyes aplicables de los Estados Unidos Mexicanos.</p>
          <p>Cualquier controversia será atendida conforme a los mecanismos y autoridades competentes que resulten aplicables, sin perjuicio de los derechos que correspondan a consumidores y usuarios conforme a la legislación mexicana.</p>
        </div>
        <div className="legal-section">
          <h2>XIX. Contacto</h2>
          <p>Para cualquier duda relacionada con estos Términos y Condiciones:</p>
          <ul>
            <li><strong>Responsable:</strong> Red de Administración y Compraventa, S.A. de C.V.</li>
            <li><strong>Nombre comercial:</strong> Rednorte Inmobiliaria</li>
            <li><strong>Domicilio:</strong> Av. José Vasconcelos Ote. 215, Local 7, Residencial San Agustín 1er Sector, C.P. 66260, San Pedro Garza García, Nuevo León.</li>
            <li><strong>Teléfono:</strong> +52 81 1778 3953</li>
            <li><strong>Correo electrónico:</strong> admin@rednorte.com.mx</li>
            <li><strong>Sitio web:</strong> rednorte.mx</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
