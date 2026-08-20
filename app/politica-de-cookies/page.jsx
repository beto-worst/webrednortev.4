import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Política de Cookies',
  description: 'Política de Cookies de Rednorte Inmobiliaria: qué cookies utilizamos en rednorte.mx y cómo puedes configurarlas.',
  alternates: { canonical: '/politica-de-cookies' },
};

export default function PoliticaCookiesPage() {
  return (
    <div className="page-content">
      <Breadcrumb items={[{ label: 'Política de cookies' }]} />
      <div className="legal-page">
        <h1>Política de Cookies</h1>
        <p className="legal-date">Última actualización: 13 de agosto de 2026</p>
        <div className="legal-section">
          <p>La presente Política de Cookies explica cómo Red de Administración y Compraventa, S.A. de C.V., bajo el nombre comercial Rednorte Inmobiliaria, utiliza cookies y tecnologías similares en el sitio rednorte.mx.</p>
          <p>Esta Política complementa nuestro <Link href="/aviso-de-privacidad" style={{ color: 'var(--terracota)' }}>Aviso de Privacidad Integral</Link>, donde se describe de manera general cómo tratamos y protegemos los datos personales de nuestros usuarios.</p>
        </div>
        <div className="legal-section">
          <h2>I. ¿Qué son las cookies?</h2>
          <p>Las cookies son pequeños archivos o fragmentos de información que un sitio web puede almacenar en el navegador o dispositivo del usuario cuando visita una página.</p>
          <p>Estas tecnologías pueden permitir, entre otras funciones, recordar preferencias, mantener determinadas funcionalidades del sitio, conocer cómo se utiliza una página, medir el funcionamiento de campañas y mejorar la experiencia de navegación.</p>
          <p>Además de cookies, el sitio podrá utilizar tecnologías similares, como píxeles, etiquetas de seguimiento, web beacons, almacenamiento local, identificadores y otras herramientas de medición digital.</p>
        </div>
        <div className="legal-section">
          <h2>II. ¿Para qué utilizamos cookies?</h2>
          <p>Rednorte podrá utilizar cookies y tecnologías similares para las siguientes finalidades:</p>
          <p><strong>1. Cookies necesarias.</strong> Permiten el funcionamiento básico y seguro del sitio. Pueden utilizarse para:</p>
          <ul>
            <li>Mantener funcionalidades esenciales.</li>
            <li>Recordar determinadas configuraciones.</li>
            <li>Procesar formularios.</li>
            <li>Mantener la seguridad del sitio.</li>
            <li>Gestionar sesiones.</li>
            <li>Recordar las preferencias de privacidad o cookies del usuario.</li>
          </ul>
          <p>Estas tecnologías son necesarias para proporcionar determinadas funciones del sitio.</p>
          <p><strong>2. Cookies de preferencias.</strong> Permiten recordar elecciones realizadas por el usuario, como idioma, ubicación aproximada, preferencias de búsqueda u otras configuraciones. Su finalidad es facilitar una experiencia más personalizada en visitas posteriores.</p>
          <p><strong>3. Cookies de analítica y rendimiento.</strong> Permiten conocer de manera agregada cómo utilizan los visitantes el sitio. Pueden utilizarse para medir:</p>
          <ul>
            <li>Número de visitantes.</li>
            <li>Páginas consultadas.</li>
            <li>Tiempo de navegación.</li>
            <li>Fuentes de tráfico.</li>
            <li>Interacciones con propiedades.</li>
            <li>Uso de buscadores y herramientas.</li>
            <li>Formularios iniciados o completados.</li>
            <li>Clics en botones o enlaces.</li>
            <li>Rendimiento técnico del sitio.</li>
          </ul>
          <p>Esta información nos permite identificar oportunidades de mejora y optimizar la experiencia del usuario.</p>
          <p><strong>4. Cookies de publicidad y medición.</strong> Cuando se encuentren habilitadas, podrán utilizarse para medir campañas publicitarias, conocer qué anuncios generan visitas o solicitudes de información y evaluar la efectividad de nuestras acciones comerciales. También podrán utilizarse para mostrar publicidad relacionada con nuestros servicios a personas que previamente hayan interactuado con nuestro sitio, cuando resulte aplicable.</p>
          <p><strong>5. Cookies de terceros.</strong> Algunas funcionalidades pueden ser proporcionadas por empresas o plataformas externas. Estas tecnologías pueden estar relacionadas, entre otros, con:</p>
          <ul>
            <li>Herramientas de analítica.</li>
            <li>Mapas.</li>
            <li>Videos.</li>
            <li>Redes sociales.</li>
            <li>WhatsApp.</li>
            <li>Publicidad digital.</li>
            <li>Reseñas y testimonios.</li>
            <li>Formularios.</li>
            <li>Sistemas CRM.</li>
            <li>Herramientas de medición.</li>
            <li>Servicios de seguridad y funcionamiento.</li>
          </ul>
          <p>Las cookies establecidas directamente por dichos proveedores estarán sujetas adicionalmente a sus propias políticas de privacidad y cookies.</p>
        </div>
        <div className="legal-section">
          <h2>III. Cookies de sesión y persistentes</h2>
          <p>Dependiendo de su duración, las cookies utilizadas pueden clasificarse como:</p>
          <p><strong>Cookies de sesión:</strong> permanecen mientras el usuario mantiene activa su navegación y normalmente se eliminan al cerrar el navegador.</p>
          <p><strong>Cookies persistentes:</strong> permanecen almacenadas durante un periodo determinado o hasta que el usuario las elimina.</p>
          <p>La duración concreta dependerá de la función de cada cookie y del proveedor que la establezca.</p>
        </div>
        <div className="legal-section">
          <h2>IV. Consentimiento y configuración</h2>
          <p>Cuando corresponda, el sitio podrá mostrar un panel o banner de configuración de cookies para que el usuario pueda:</p>
          <ul>
            <li>Aceptar las cookies opcionales.</li>
            <li>Rechazar las cookies opcionales.</li>
            <li>Configurar determinadas categorías.</li>
            <li>Modificar posteriormente sus preferencias.</li>
          </ul>
          <p>Las cookies estrictamente necesarias para el funcionamiento y seguridad del sitio podrán permanecer activas cuando sean indispensables para proporcionar las funcionalidades solicitadas por el usuario.</p>
          <p>Las preferencias seleccionadas podrán guardarse para evitar solicitar nuevamente la misma configuración durante un periodo razonable.</p>
        </div>
        <div className="legal-section">
          <h2>V. Cómo modificar o eliminar cookies</h2>
          <p>El usuario puede modificar o eliminar cookies utilizando las opciones disponibles en su navegador. Los principales navegadores permiten, entre otras acciones:</p>
          <ul>
            <li>Consultar las cookies almacenadas.</li>
            <li>Eliminar cookies.</li>
            <li>Bloquear determinadas cookies.</li>
            <li>Impedir el almacenamiento de cookies.</li>
            <li>Eliminar automáticamente las cookies al cerrar el navegador.</li>
          </ul>
          <p>La desactivación de determinadas cookies puede provocar que algunas funciones, preferencias o herramientas del sitio no operen correctamente.</p>
          <p>Cuando rednorte.mx disponga de un centro de preferencias de cookies, el usuario también podrá utilizarlo para modificar sus elecciones sin necesidad de eliminar todas las cookies del navegador.</p>
        </div>
        <div className="legal-section">
          <h2>VI. Información que puede recabarse</h2>
          <p>Dependiendo de las herramientas utilizadas y de la configuración del usuario, las cookies y tecnologías similares pueden recopilar información como:</p>
          <ul>
            <li>Dirección IP.</li>
            <li>Tipo de dispositivo.</li>
            <li>Navegador.</li>
            <li>Sistema operativo.</li>
            <li>Idioma.</li>
            <li>Fecha y hora de acceso.</li>
            <li>Páginas visitadas.</li>
            <li>Duración aproximada de la navegación.</li>
            <li>Fuente de procedencia.</li>
            <li>Interacciones con botones, formularios, búsquedas y herramientas.</li>
            <li>Identificadores técnicos o publicitarios.</li>
            <li>Información aproximada de ubicación derivada de datos técnicos.</li>
          </ul>
          <p>Cuando la información obtenida mediante estas tecnologías constituya un dato personal, será tratada conforme a nuestro Aviso de Privacidad.</p>
        </div>
        <div className="legal-section">
          <h2>VII. Herramientas de Rednorte</h2>
          <p>El sitio puede registrar determinadas interacciones realizadas con herramientas como el estimador de valor inmobiliario, reporte de vendibilidad, buscador de propiedades, formularios de contacto u otras funcionalidades.</p>
          <p>Cuando el usuario proporcione datos que permitan identificarlo, su tratamiento estará sujeto al Aviso de Privacidad Integral de Rednorte Inmobiliaria.</p>
          <p>Los resultados individuales de dichas herramientas no serán publicados de manera identificable sin autorización o fundamento legal aplicable.</p>
        </div>
        <div className="legal-section">
          <h2>VIII. Información de terceros</h2>
          <p>Rednorte podrá integrar herramientas tecnológicas operadas por terceros.</p>
          <p>La disponibilidad y funcionamiento de dichas herramientas, así como las cookies que puedan instalar directamente, estarán sujetos a las políticas de dichos proveedores.</p>
          <p>Rednorte procurará utilizar proveedores compatibles con sus necesidades operativas, comerciales y de protección de información.</p>
        </div>
        <div className="legal-section">
          <h2>IX. Actualización del inventario de cookies</h2>
          <p>Las cookies utilizadas por rednorte.mx pueden cambiar cuando se incorporen, eliminen o actualicen funcionalidades, herramientas de analítica, sistemas publicitarios, integraciones o proveedores tecnológicos.</p>
          <p>El sitio podrá mantener un listado actualizado de las cookies y tecnologías detectadas, indicando, cuando sea técnicamente posible:</p>
          <ul>
            <li>Nombre de la cookie.</li>
            <li>Proveedor.</li>
            <li>Finalidad.</li>
            <li>Categoría.</li>
            <li>Duración.</li>
          </ul>
          <p>Dicho listado deberá corresponder a las tecnologías realmente activas en el sitio.</p>
        </div>
        <div className="legal-section">
          <h2>X. Cambios a esta política</h2>
          <p>Rednorte Inmobiliaria podrá modificar la presente Política de Cookies para reflejar cambios tecnológicos, operativos, comerciales, regulatorios o legales.</p>
          <p>La versión vigente estará disponible permanentemente en rednorte.mx y señalará la fecha de su última actualización.</p>
        </div>
        <div className="legal-section">
          <h2>XI. Contacto</h2>
          <p>Para cualquier duda relacionada con el uso de cookies, tecnologías de seguimiento o tratamiento de datos personales:</p>
          <ul>
            <li><strong>Responsable:</strong> Red de Administración y Compraventa, S.A. de C.V.</li>
            <li><strong>Nombre comercial:</strong> Rednorte Inmobiliaria</li>
            <li><strong>Domicilio:</strong> Av. José Vasconcelos Ote. 215-7, Residencial San Agustín 1er Sector, C.P. 66260, San Pedro Garza García, Nuevo León.</li>
            <li><strong>Teléfono:</strong> +52 81 1778 3953</li>
            <li><strong>Correo electrónico:</strong> admin@rednorte.com.mx</li>
            <li><strong>Sitio web:</strong> rednorte.mx</li>
          </ul>
          <p>Para conocer más sobre el tratamiento de datos personales, consulte nuestro <Link href="/aviso-de-privacidad" style={{ color: 'var(--terracota)' }}>Aviso de Privacidad Integral</Link>.</p>
        </div>
      </div>
    </div>
  );
}
