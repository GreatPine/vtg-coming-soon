import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description: "Kako Aurora Mentis i VTG obrađuju podatke korisnika.",
};

const sections = [
  {
    title: "1. Ko je rukovalac podataka",
    paragraphs: [
      "Rukovalac podataka je Aurora Mentis, Rubensova 24, Beograd, Republika Srbija (u daljem tekstu: „VTG“, „mi“ ili „rukovalac“).",
      "Za pitanja o privatnosti, ostvarivanje prava ili prigovor na obradu podataka možete nam se obratiti na support@vtguide.app.",
    ],
  },
  {
    title: "2. Na koga se politika odnosi",
    paragraphs: [
      "Ova politika odnosi se na javni sajt VTG, mobilnu aplikaciju VTG i povezane API usluge. Ne odnosi se na sajtove i usluge trećih lica do kojih možete doći preko VTG-a; za njih važe njihove sopstvene politike privatnosti.",
    ],
  },
  {
    title: "3. Koje podatke možemo obrađivati",
    paragraphs: [
      "U zavisnosti od funkcije koju koristite, možemo obrađivati email adresu i podatke za autentifikaciju, podatke profila i jezička podešavanja, podatke o premium ili promotivnom pristupu, sačuvane ture i posećena mesta, kao i podatke koje unesete u zahtev za generisanje ture.",
      "Ako uključite funkciju zasnovanu na lokaciji, aplikacija može koristiti trenutnu lokaciju uređaja radi pretrage mesta u blizini ili planiranja rute. Do potvrde posebne operativne politike ne treba pretpostaviti da je svaka lokacija trajno sačuvana; stvarni tok čuvanja zavisi od konkretne funkcije.",
      "Možemo obrađivati i tehničke podatke potrebne za bezbednost i rad usluge, kao što su IP adresa, vreme zahteva, tip uređaja, verzija aplikacije i zapisi o greškama.",
    ],
  },
  {
    title: "4. Zašto obrađujemo podatke",
    paragraphs: [
      "Podatke koristimo da napravimo i prikažemo turističku rutu, omogućimo nalog i sinhronizaciju, sačuvamo ture i istoriju kada to zatražite, obezbedimo audio naracije, zaštitimo uslugu od zloupotrebe, odgovorimo na podršku i ispunimo zakonske obaveze.",
      "Pravni osnov može biti izvršenje ugovora sa korisnikom, naš legitimni interes za bezbednost i održavanje usluge, vaša saglasnost kada je potrebna ili zakonska obaveza. Saglasnost možete povući bez uticaja na zakonitost ranije obrade.",
    ],
  },
  {
    title: "5. Usluge drugih pružalaca",
    paragraphs: [
      "Za rad VTG-a mogu biti angažovani Supabase za autentifikaciju, bazu i skladištenje, Google Maps/Places za geografske i podatke o mestima, OpenAI za pojedine AI tekstualne i audio obrade i Wikipedia za dopunske javne informacije. Podaci se šalju samo kada je to potrebno za izabranu funkciju.",
      "Ovi pružaoci mogu obrađivati podatke u drugim državama. Pre produkcijske objave treba potvrditi konkretne regione, ugovore o obradi i mehanizme međunarodnog prenosa za svaki pružalac.",
    ],
  },
  {
    title: "6. Koliko dugo čuvamo podatke",
    paragraphs: [
      "Podatke čuvamo samo onoliko dugo koliko je potrebno za navedenu svrhu, dok je nalog aktivan, dok postoji zakonska obaveza ili dok je potrebno rešiti spor i zaštititi legitimna prava. Zahtev za brisanje obrađujemo bez nepotrebnog odlaganja, uz moguće čuvanje ograničenog obima podataka kada to nalaže zakon ili je neophodno za bezbednost.",
      "Konkretni rokovi za naloge, istoriju tura, audio zapise, server logove, rezervne kopije i kontakt poruke biće dopunjeni čim bude usvojena operativna politika čuvanja.",
    ],
  },
  {
    title: "7. Vaša prava",
    paragraphs: [
      "U skladu sa primenljivim propisima možete tražiti pristup podacima, ispravku netačnih podataka, brisanje, ograničenje obrade, prenosivost podataka, uložiti prigovor ili povući saglasnost kada se obrada zasniva na saglasnosti.",
      "Zahtev pošaljite na support@vtguide.app. Možemo tražiti razumne podatke za potvrdu identiteta kako bismo zaštitili nalog. Imate pravo da podnesete pritužbu Povereniku za informacije od javnog značaja i zaštitu podataka o ličnosti Republike Srbije.",
    ],
  },
  {
    title: "8. Deca i bezbednost",
    paragraphs: [
      "VTG nije namenjen deci mlađoj od 13 godina. Ne tražimo svesno podatke od dece mlađe od 13 godina; ako saznamo da su takvi podaci prikupljeni, preduzećemo razumne korake da ih uklonimo.",
      "Ne unosite u VTG posebne kategorije podataka, lozinke drugih servisa, podatke platnih kartica ili druge poverljive podatke koji nisu potrebni za turistički vodič.",
    ],
  },
  {
    title: "9. Kolačići i lokalno čuvanje",
    paragraphs: [
      "Sajt trenutno koristi lokalno čuvanje izabranog jezika radi korisničkog iskustva. Analitika, oglašavanje i dodatni kolačići mogu biti uvedeni tek uz odgovarajuće obaveštenje, izbor korisnika i dopunu ove politike.",
    ],
  },
  {
    title: "10. Izmene politike",
    paragraphs: [
      "Ovu politiku možemo izmeniti kada se promeni VTG, propisi ili način obrade. Na ovoj stranici ćemo objaviti novu verziju i datum izmene. Poslednje ažuriranje: 30. avgust 2026.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#07111f] px-6 py-16 text-white">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-bold text-amber-300 hover:text-amber-200">
          VTG početna
        </Link>
        <h1 className="mt-8 text-4xl font-black md:text-5xl">Politika privatnosti</h1>
        <p className="mt-5 leading-8 text-slate-300">
          Ova verzija predstavlja javni nacrt zasnovan na trenutno poznatim VTG funkcijama. Rokovi čuvanja, analitika, konkretni regioni pružalaca i međunarodni prenosi moraju biti potvrđeni pre konačne objave.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-black text-amber-300">{section.title}</h2>
              <div className="mt-4 space-y-4 text-[1.02rem] leading-8 text-slate-300">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
