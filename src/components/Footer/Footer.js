import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon } from 'mdbreact'
import './Footer.css'

class Footer extends Component {
  state={
    modal4: false,
    modal5: false
  }
  
  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  render () {
    return (

      <footer id='footer' className='page-footer font-small'>

        <div className='container'>
          <div className='row'>
            <div className='col-md-12 py-5'>
              <div className='mb-5 flex-center'>
                <Image src={require('../../img/logo-OGDPC-fr.png')} className='image_footer' />
                <br />
                <a href='https://twitter.com/anthropi_?lang=fr'><MDBIcon className='twitter px-2' fab icon="twitter fa-3x" /></a>
                <br />
                <a href='https://www.linkedin.com/company/anthropi/'><MDBIcon className='linkedin px-4' fab icon="linkedin-in fa-3x" /></a>
                <Image src={require('../../img/Picto_datadocke.jpg')} className='image_footer' />
              </div>
            </div>
          </div>
          <MDBContainer>
      <MDBBtn color="dark" onClick={this.toggle(5)}>Mentions Légales</MDBBtn>
      <MDBModal isOpen={this.state.modal5} toggle={this.toggle(5)} size="fluid">
        <MDBModalHeader toggle={this.toggle(5)}>Mentions Légales</MDBModalHeader>
        <MDBModalBody id='modal'>
        <h2 className='text-left'>Définitions</h2>
            <p className='text-left'>
                Client : tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des présentes conditions générales.
                Prestations et Services : http://anthropi.fr met à disposition des Clients :
            </p>
            <p className='text-left'>
                Contenu : Ensemble des éléments constituants l’information présente sur le Site, notamment textes – images – vidéos.
            </p>
            <p className='text-left'>
                Informations clients : Ci après dénommé « Information (s) » qui correspondent à l’ensemble des données personnelles susceptibles d’être détenues par  http://anthropi.fr pour la gestion de votre compte, de la gestion de la relation client et à des fins d’analyses et de statistiques.
            </p>
            <p className='text-left'>
                Utilisateur : Internaute se connectant, utilisant le site susnommé.
            </p>
            <p className='text-left'>
                Informations personnelles : « Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
            </p>
            <p className='text-left'>
                Les termes « données à caractère personnel », « personne concernée », « sous traitant » et « données sensibles » ont le sens défini par le Règlement Général sur la Protection des Données (RGPD : n° 2016-679)
            </p>
        <h2 className='mt-5 mb-3'>1. Présentation du site internet.</h2>
            <p className='text-left'>
                En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet http://anthropi.fr l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi:
            </p>
            <p className='text-left'>Propriétaire : SAS anthroPi – 64 E rue de Sully 21000 dijon</p>
            <p className='text-left'>Responsable publication : CEO</p>
            <p className='text-left'>Le responsable publication est une personne physique ou une personne morale.</p>
            <p className='text-left'>Webmaster : Nessim Belhadj – 0628689171</p>
            <p className='text-left'>Hébergeur : o2switch – o2switch 63000 Clermont-Ferrand 04 44 44 60 40</p>
            <p className='text-left'>Délégué à la protection des données : DPO</p>

        <h2 className='mt-5 mb-3'>2. Conditions générales d’utilisation du site et des services proposés.</h2>
            <p className='text-left'>
                Le Site constitue une œuvre de l’esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables. Le Client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site.
            </p>
            <p className='text-left'>
                L’utilisation du site http://anthropi.fr implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions  d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site http://anthropi.fr sont donc invités à les consulter de manière régulière.
            </p>
            <p className='text-left'>
                Ce site internet est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par http://anthropi.fr, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention. Le site web http://anthropi.fr est mis à jour régulièrement par http://anthropi.fr responsable. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.
            </p>
        <h2 className='mt-5 mb-3'>3. Description des services fournis.</h2>
            <p className='text-left'>
                Le site internet http://anthropi.fr a pour objet de fournir une information concernant l’ensemble des activités de la société. http://anthropi.fr s’efforce de fournir sur le site http://anthropi.fr des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
            <p className='text-left'>
                Toutes les informations indiquées sur le site http://anthropi.fr sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site http://anthropi.fr ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
            </p>
        <h2 className='mt-5 mb-3'>4. Limitations contractuelles sur les données techniques.</h2>
            <p className='text-left'>
                Le site utilise la technologie JavaScript. Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour Le site http://anthropi.fr est hébergé chez un prestataire sur le territoire de l’Union Européenne conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD : n° 2016-679)
            </p>
            <p className='text-left'>
                L’objectif est d’apporter une prestation qui assure le meilleur taux d’accessibilité. L’hébergeur assure la continuité de son service 24 Heures sur 24, tous les jours de l’année. Il se réserve néanmoins la possibilité d’interrompre le service d’hébergement pour les durées les plus courtes possibles notamment à des fins de maintenance, d’amélioration de ses infrastructures, de défaillance de ses infrastructures ou si les Prestations et Services génèrent un trafic réputé anormal.
            </p>
            <p className='text-left'>
                http://anthropi.fr et l’hébergeur ne pourront être tenus responsables en cas de dysfonctionnement du réseau Internet, des lignes téléphoniques ou du matériel informatique et de téléphonie lié notamment à l’encombrement du réseau empêchant l’accès au serveur.
            </p>
       <h2 className='mt-5 mb-3'>5. Propriété intellectuelle et contrefaçons.</h2>
            <p className='text-left'>
                http://anthropi.fr est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et sons. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : http://anthropi.fr.
            </p>
            <p className='text-left'>
                Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>
        <h2 className='mt-5 mb-3'>6. Limitations de responsabilité.</h2>
            <p className='text-left'>
                http://anthropi.fr agit en tant qu’éditeur du site. http://anthropi.fr  est responsable de la qualité et de la véracité du Contenu qu’il publie.
            </p>
            <p className='text-left'>
                http://anthropi.fr ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site internet http://anthropi.fr, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.
            </p>
            <p className='text-left'>
                http://anthropi.fr ne pourra également être tenu responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site http://anthropi.fr. Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. http://anthropi.fr se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, http://anthropi.fr se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).
            </p>
        <h2 className='mt-5 mb-3'>7. Gestion des données personnelles.</h2>
            <p className='text-left'>
                Le Client est informé des réglementations concernant la communication marketing, la loi du 21 Juin 2014 pour la confiance dans l’Economie Numérique, la Loi Informatique et Liberté du 06 Août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
            </p>
        <h3 className='text-left mt-4'>7.1 Responsables de la collecte des données personnelles</h3>
            <p className='text-left'>
                Pour les Données Personnelles collectées dans le cadre de la création du compte personnel de l’Utilisateur et de sa navigation sur le Site, le responsable du traitement des Données Personnelles est : anthroPi. http://anthropi.frest représenté par Boidron, son représentant légal
            </p>
            <p className='text-left'>
                En tant que responsable du traitement des données qu’il collecte, http://anthropi.fr s’engage à respecter le cadre des dispositions légales en vigueur. Il lui appartient notamment au Client d’établir les finalités de ses traitements de données, de fournir à ses prospects et clients, à partir de la collecte de leurs consentements, une information complète sur le traitement de leurs données personnelles et de maintenir un registre des traitements conforme à la réalité. Chaque fois que http://anthropi.fr traite des Données Personnelles, http://anthropi.fr prend toutes les mesures raisonnables pour s’assurer de l’exactitude et de la pertinence des Données Personnelles au regard des finalités pour lesquelles http://anthropi.fr les traite.
            </p>
 
        <h3 className='text-left mt-4'>7.2 Finalité des données collectées</h3>
            <p className='text-left'>
                http://anthropi.fr est susceptible de traiter tout ou partie des données :
            </p>
            <ul className='text-left mt-4'>
                <li>pour permettre la navigation sur le Site et la gestion et la traçabilité des prestations et services commandés par l’utilisateur : données de connexion et d’utilisation du Site, facturation, historique des commandes, etc.
                </li>
                <li>pour prévenir et lutter contre la fraude informatique (spamming, hacking…) : matériel informatique utilisé pour la navigation, l’adresse IP, le mot de passe (hashé)
                </li>
                <li>pour améliorer la navigation sur le Site : données de connexion et d’utilisation
                </li>
                <li>pour mener des enquêtes de satisfaction facultatives sur http://anthropi.fr : adresse email
                </li>
                <li>pour mener des campagnes de communication (sms, mail) : numéro de téléphone, adresse email
                </li>
            </ul>
            <p className='text-left'>http://anthropi.fr ne commercialise pas vos données personnelles qui sont donc uniquement utilisées par nécessité ou à des fins statistiques et d’analyses.
            </p>
        <h3 className='text-left mt-4'>7.3 Droit d’accès, de rectification et d’opposition</h3>
            <p className='text-left'>Conformément à la réglementation européenne en vigueur, les Utilisateurs de http://anthropi.fr disposent des droits suivants :</p>
            <ul className='text-left'>
                <li>droit d'accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à jour, de complétude des données des Utilisateurs droit de verrouillage ou d’effacement des données des Utilisateurs à caractère personnel (article 17 du RGPD), lorsqu’elles sont inexactes, incomplètes, équivoques, périmées, ou dont la collecte, l'utilisation, la communication ou la conservation est interdite
                </li>
                <li>droit de retirer à tout moment un consentement (article 13-2c RGPD)
                </li>
                <li>droit à la limitation du traitement des données des Utilisateurs (article 18 RGPD)
                </li>
                <li>droit d’opposition au traitement des données des Utilisateurs (article 21 RGPD)
                </li>
                <li>droit à la portabilité des données que les Utilisateurs auront fournies, lorsque ces données font l’objet de traitements automatisés fondés sur leur consentement ou sur un contrat (article 20 RGPD)
                </li>
                <li> 
                droit de définir le sort des données des Utilisateurs après leur mort et de choisir à qui http://anthropi.fr devra communiquer (ou non) ses données à un tiers qu’ils aura préalablement désigné
                </li>
            </ul>
            <p className='text-left'>
                Dès que http://anthropi.fr a connaissance du décès d’un Utilisateur et à défaut d’instructions de sa part, http://anthropi.fr s’engage à détruire ses données,sauf si leur conservation s’avère nécessaire à des fins probatoires ou pour répondre à une obligation légale.
            </p>
            <p className='text-left'>
                Si l’Utilisateur souhaite savoir comment http://anthropi.fr utilise ses Données Personnelles, demander à les rectifier ou s’oppose à leur traitement, l’Utilisateur peut contacter http://anthropi.fr par écrit à l’adresse suivante :
            </p>
            <p className='text-left'>
                anthroPi – DPO, Boidron <br/>
                64 E rue de Sully 21000 dijon. <br/>
                Dans ce cas, l’Utilisateur doit indiquer les Données Personnelles qu’il souhaiterait que http://anthropi.fr corrige, mette à jour ou supprime, en s’identifiant précisément avec une copie d’une pièce d’identité (carte d’identité ou passeport).
            </p>
            <p className='text-left'>
                Les demandes de suppression de Données Personnelles seront soumises aux obligations qui sont imposées à http://anthropi.fr par la loi, notamment en matière de conservation ou d’archivage des documents. Enfin, les Utilisateurs de http://anthropi.fr peuvent déposer une réclamation auprès des autorités de contrôle, et notamment de la CNIL (https://www.cnil.fr/fr/plaintes).
            </p>
 
        <h3 className='text-left mt-4'>7.4 Non-communication des données personnelles</h3>
            <p className='text-left'>
                http://anthropi.fr s’interdit de traiter, héberger ou transférer les Informations collectées sur ses Clients vers un pays situé en dehors de l’Union européenne ou reconnu comme « non adéquat » par la Commission européenne sans en informer préalablement le client. Pour autant, http://anthropi.fr reste libre du choix de ses sous-traitants techniques et commerciaux à la condition qu’il présentent les garanties suffisantes au regard des exigences du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
            </p>
            <p className='text-left'>
                http://anthropi.fr s’engage à prendre toutes les précautions nécessaires afin de préserver la sécurité des Informations et notamment qu’elles ne soient pas communiquées à des personnes non autorisées. Cependant, si un incident impactant l’intégrité ou la confidentialité des Informations du Client est portée à la connaissance de http://anthropi.fr, celle-ci devra dans les meilleurs délais informer le Client et lui communiquer les mesures de corrections prises. Par ailleurs http://anthropi.fr ne collecte aucune « données sensibles ».
            </p>
            <p className='text-left'>
                Les Données Personnelles de l’Utilisateur peuvent être traitées par des filiales de http://anthropi.fr et des sous-traitants (prestataires de services), exclusivement afin de réaliser les finalités de la présente politique.
            </p>
            <p className='text-left'>
                Dans la limite de leurs attributions respectives et pour les finalités rappelées ci-dessus, les principales personnes susceptibles d’avoir accès aux données des Utilisateurs de http://anthropi.fr sont principalement les agents de notre service client.
            </p>
        <h2 className='mt-5 mb-3'>8. Notification d’incident</h2>
            <p className='text-left'>
                Quels que soient les efforts fournis, aucune méthode de transmission sur Internet et aucune méthode de stockage électronique n'est complètement sûre. Nous ne pouvons en conséquence pas garantir une sécurité absolue. Si nous prenions connaissance d'une brèche de la sécurité, nous avertirions les utilisateurs concernés afin qu'ils puissent prendre les mesures appropriées. Nos procédures de notification d’incident tiennent compte de nos obligations légales, qu'elles se situent au niveau national ou européen. Nous nous engageons à informer pleinement nos clients de toutes les questions relevant de la sécurité de leur compte et à leur fournir toutes les informations nécessaires pour les aider à respecter leurs propres obligations réglementaires en matière de reporting.
            </p>
            <p className='text-left'>
                Aucune information personnelle de l'utilisateur du site http://anthropi.fr n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de http://anthropi.fr et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site http://anthropi.fr.
            </p>
        <h6>Sécurité</h6>
            <p className='text-left'>
                Pour assurer la sécurité et la confidentialité des Données Personnelles et des Données Personnelles de Santé, http://anthropi.fr utilise des réseaux protégés par des dispositifs standards tels que par pare-feu, la pseudonymisation, l’encryption et mot de passe.
            </p>
            <p className='text-left'>
                Lors du traitement des Données Personnelles, http://anthropi.frprend toutes les mesures raisonnables visant à les protéger contre toute perte, utilisation détournée, accès non autorisé, divulgation, altération ou destruction.
            </p>
 
        <h2 className='mt-5 mb-3'>9. Liens hypertextes « cookies » et balises (“tags”) internet</h2>
            <p className='text-left'>
                Le site http://anthropi.fr contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de http://anthropi.fr. Cependant, http://anthropi.fr n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.
            </p>
            <p className='text-left'>
                Sauf si vous décidez de désactiver les cookies, vous acceptez que le site puisse les utiliser. Vous pouvez à tout moment désactiver ces cookies et ce gratuitement à partir des possibilités de désactivation qui vous sont offertes et rappelées ci-après, sachant que cela peut réduire ou empêcher l’accessibilité à tout ou partie des Services proposés par le site.
            </p>
        <h3 className='text-left mt-4'>9.1. « COOKIES »</h3>
            <p className='text-left'>
                Un « cookie » est un petit fichier d’information envoyé sur le navigateur de l’Utilisateur et enregistré au sein du terminal de l’Utilisateur (ex : ordinateur, smartphone), (ci-après « Cookies »). Ce fichier comprend des informations telles que le nom de domaine de l’Utilisateur, le fournisseur d’accès Internet de l’Utilisateur, le système d’exploitation de l’Utilisateur, ainsi que la date et l’heure d’accès. Les Cookies ne risquent en aucun cas d’endommager le terminal de l’Utilisateur.
            </p>
            <p className='text-left'>
                http://anthropi.fr est susceptible de traiter les informations de l’Utilisateur concernant sa visite du Site, telles que les pages consultées, les recherches effectuées. Ces informations permettent à http://anthropi.fr d’améliorer le contenu du Site, de la navigation de l’Utilisateur.
            </p> 
            <p className='text-left'>
                Les Cookies facilitant la navigation et/ou la fourniture des services proposés par le Site, l’Utilisateur peut configurer son navigateur pour qu’il lui permette de décider s’il souhaite ou non les accepter de manière à ce que des Cookies soient enregistrés dans le terminal ou, au contraire, qu’ils soient rejetés, soit systématiquement, soit selon leur émetteur. L’Utilisateur peut également configurer son logiciel de navigation de manière à ce que l’acceptation ou le refus des Cookies lui soient proposés ponctuellement, avant qu’un Cookie soit susceptible d’être enregistré dans son terminal. http://anthropi.fr informe l’Utilisateur que, dans ce cas, il se peut que les fonctionnalités de son logiciel de navigation ne soient pas toutes disponibles.
            </p> 
            <p className='text-left'>
                Si l’Utilisateur refuse l’enregistrement de Cookies dans son terminal ou son navigateur, ou si l’Utilisateur supprime ceux qui y sont enregistrés, l’Utilisateur est informé que sa navigation et son expérience sur le Site peuvent être limitées. Cela pourrait également être le cas lorsque http://anthropi.fr ou l’un de ses prestataires ne peut pas reconnaître, à des fins de compatibilité technique, le type de navigateur utilisé par le terminal, les paramètres de langue et d’affichage ou le pays depuis lequel le terminal semble connecté à Internet.
            </p> 
            <p className='text-left'>
                Le cas échéant, http://anthropi.fr décline toute responsabilité pour les conséquences liées au fonctionnement dégradé du Site et des services éventuellement proposés par http://anthropi.fr, résultant (i) du refus de Cookies par l’Utilisateur (ii) de l’impossibilité pour http://anthropi.fr d’enregistrer ou de consulter les Cookies nécessaires à leur fonctionnement du fait du choix de l’Utilisateur. Pour la gestion des Cookies et des choix de l’Utilisateur, la configuration de chaque navigateur est différente. Elle est décrite dans le menu d’aide du navigateur, qui permettra de savoir de quelle manière l’Utilisateur peut modifier ses souhaits en matière de Cookies.
            </p> 
            <p className='text-left'> 
                À tout moment, l’Utilisateur peut faire le choix d’exprimer et de modifier ses souhaits en matière de Cookies. http://anthropi.fr pourra en outre faire appel aux services de prestataires externes pour l’aider à recueillir et traiter les informations décrites dans cette section.
            </p>
            <p className='text-left'>
                Enfin, en cliquant sur les icônes dédiées aux réseaux sociaux Twitter, Facebook, Linkedin et Google Plus figurant sur le Site de http://anthropi.fr ou dans son application mobile et si l’Utilisateur a accepté le dépôt de cookies en poursuivant sa navigation sur le Site Internet ou l’application mobile de http://anthropi.fr, Twitter, Facebook, Linkedin et Google Plus peuvent également déposer des cookies sur vos terminaux (ordinateur, tablette, téléphone portable).
            </p> 
            <p className='text-left'>
                Ces types de cookies ne sont déposés sur vos terminaux qu’à condition que vous y consentiez, en continuant votre navigation sur le Site Internet ou l’application mobile de http://anthropi.fr. À tout moment, l’Utilisateur peut néanmoins revenir sur son consentement à ce que http://anthropi.fr dépose ce type de cookies.
            </p> 
 
        <h3 className='text-left mt-4'>Article 9.2. BALISES (“TAGS”) INTERNET</h3>
            <p className='text-left'>
                http://anthropi.fr peut employer occasionnellement des balises Internet (également appelées « tags », ou balises d’action, GIF à un pixel, GIF transparents, GIF invisibles et GIF un à un) et les déployer par l’intermédiaire d’un partenaire spécialiste d’analyses Web susceptible de se trouver (et donc de stocker les informations correspondantes, y compris l’adresse IP de l’Utilisateur) dans un pays étranger.
            </p> 
            <p className='text-left'>
                Ces balises sont placées à la fois dans les publicités en ligne permettant aux internautes d’accéder au Site, et sur les différentes pages de celui-ci.  
            </p> 
            <p className='text-left'>
                Cette technologie permet à http://anthropi.fr d’évaluer les réponses des visiteurs face au Site et l’efficacité de ses actions (par exemple, le nombre de fois où une page est ouverte et les informations consultées), ainsi que l’utilisation de ce Site par l’Utilisateur.
            </p>
            <p className='text-left'>
                Le prestataire externe pourra éventuellement recueillir des informations sur les visiteurs du Site et d’autres sites Internet grâce à ces balises, constituer des rapports sur l’activité du Site à l’attention de http://anthropi.fr, et fournir d’autres services relatifs à l’utilisation de celui-ci et d’Internet.
            </p> 
 
        <h2 className='mt-5 mb-3'>10. Droit applicable et attribution de juridiction.</h2>
            <p className='text-left'>
                Tout litige en relation avec l’utilisation du site http://anthropi.fr est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Dijon
            </p>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="danger" onClick={this.toggle(5)}>Close</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
      <MDBBtn id='btn-login'><a href='/admin' target='_blank'>Se connecter</a></MDBBtn>
    </MDBContainer>
        </div>

        <div class='footer-copyright text-center py-3'>© {new Date().getFullYear()} Copyright:
          <a href='https://nessimbelhadj.com/' rel='noopener noreferrer' target='_blank'> Belhadj Nessim</a>
          <p>Tous droits réservés</p>
        </div>

      </footer>
    )
  }
}

export default Footer
