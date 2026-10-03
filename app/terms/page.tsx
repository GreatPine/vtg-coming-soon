import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Uslovi korišćenja",
  description: "Uslovi korišćenja VTG turističkog vodiča.",
};

const sections = [
  {
    title: "1. Pružalac usluge",
    paragraphs: [
      "VTG pruža Aurora Mentis, Rubensova 24, Beograd, Republika Srbija. Za pitanja o ovim uslovima obratite nam se na support@vtguide.app.",
    ],
  },
  {
    title: "2. Prihvatanje uslova i uzrast",
    paragraphs: [
      "Korišćenjem VTG sajta, aplikacije ili API usluga prihvatate ove uslove. Ako se ne slažete sa njima, nemojte koristiti VTG.",
      "VTG je namenjen korisnicima koji imaju najmanje 13 godina. Ako ste mlađi od 18 godina, koristite VTG uz uključivanje roditelja ili staratelja kada je to potrebno prema važećim propisima.",
    ],
  },
  {
    title: "3. Šta VTG pruža",
    paragraphs: [
      "VTG može pomoći u izboru mesta, planiranju turističke rute, prikazu informacija o lokacijama i reprodukciji audio naracija. Dostupne funkcije zavise od verzije aplikacije, jezika, lokacije i tehničkih uslova.",
      "AI, Google i drugi izvori mogu sadržati greške, zastarele podatke ili nepotpune informacije. VTG nije zamena za zvanična obaveštenja, lokalne propise, profesionalni savet, hitne službe ili samostalnu procenu bezbednosti.",
    ],
  },
  {
    title: "4. Lokacija i bezbedno korišćenje",
    paragraphs: [
      "Funkcije zasnovane na lokaciji mogu zahtevati dozvolu za pristup lokaciji uređaja. Uvek proverite saobraćaj, radno vreme, zatvaranja, vremenske uslove i uputstva na licu mesta. Ne koristite telefon ili navigaciju na način koji ugrožava vas ili druge.",
      "Vi ste odgovorni za odluke tokom putovanja, uključujući izbor puta, ulazak u objekat i poštovanje lokalnih zakona i pravila.",
    ],
  },
  {
    title: "5. Nalog i korisnički sadržaj",
    paragraphs: [
      "Odgovorni ste za tačnost podataka koje unesete, čuvanje pristupa nalogu i aktivnosti izvršene kroz vaš nalog. Ne smete deliti pristup nalogu, pokušavati neovlašćen pristup, zaobilaziti ograničenja ili koristiti VTG za nezakonite, obmanjujuće ili štetne aktivnosti.",
      "Ne šaljite lične, poverljive ili posebne kategorije podataka koji nisu potrebni za turističku funkciju. Sadržaj koji unesete mora biti vaš ili morate imati pravo da ga koristite.",
    ],
  },
  {
    title: "6. Treće strane i spoljne usluge",
    paragraphs: [
      "VTG može koristiti Supabase, Google Maps/Places, OpenAI, Wikipedia i druge tehničke dobavljače. Na njihove usluge mogu se primenjivati posebni uslovi i politike privatnosti. Spoljni link ili podatak ne predstavlja garanciju da je sadržaj potpun, tačan ili stalno dostupan.",
    ],
  },
  {
    title: "7. Intelektualna svojina",
    paragraphs: [
      "VTG naziv, znak, dizajn, kôd i originalni sadržaj zaštićeni su pravima Aurora Mentis ili odgovarajućih nosilaca prava. Dobijate ograničeno, opozivo i neprenosivo pravo da koristite VTG za lične i zakonite turističke potrebe.",
      "Ne smete kopirati, prodavati, iznajmljivati, distribuirati, dekompajlirati ili komercijalno iskorišćavati VTG bez prethodne pisane dozvole, osim u meri u kojoj je to izričito dozvoljeno zakonom.",
    ],
  },
  {
    title: "8. Dostupnost, izmene i prekid",
    paragraphs: [
      "Nastojimo da VTG bude dostupan i bezbedan, ali ne garantujemo neprekidan rad, potpunu tačnost podataka, dostupnost svake funkcije ili rad bez grešaka. Možemo menjati, privremeno obustaviti ili ukinuti deo usluge radi održavanja, bezbednosti, zakonskih razloga ili razvoja proizvoda.",
      "Možemo ograničiti ili ukinuti pristup nalogu ako korisnik krši ove uslove, ugrožava uslugu ili druge korisnike, ili kada je to potrebno radi poštovanja zakona.",
    ],
  },
  {
    title: "9. Odgovornost",
    paragraphs: [
      "U meri dozvoljenoj važećim pravom, VTG se pruža bez garancije da će odgovarati svakoj svrsi ili situaciji. Ne ograničavamo odgovornost koja se po zakonu ne može ograničiti, naročito za nameru, krajnju nepažnju ili druga obavezna prava potrošača.",
      "Korisnik ne treba da se oslanja na VTG kao jedini izvor za bezbednosne, zdravstvene, pravne, saobraćajne ili hitne odluke.",
    ],
  },
  {
    title: "10. Plaćene funkcije",
    paragraphs: [
      "Ako uvedemo pretplatu, plaćene funkcije ili promotivne kodove, njihova cena, trajanje, obnavljanje, otkazivanje i pravila povraćaja biće prikazani pre kupovine i mogu biti uređeni dodatnim uslovima. Ova stranica ne predstavlja potvrdu da su plaćanja trenutno aktivna.",
    ],
  },
  {
    title: "11. Merodavno pravo i sporovi",
    paragraphs: [
      "Na ove uslove primenjuje se pravo Republike Srbije. Za sporove je, uz poštovanje obaveznih pravila o zaštiti potrošača i nadležnosti, nadležan stvarno nadležni sud u Beogradu.",
    ],
  },
  {
    title: "12. Izmene uslova",
    paragraphs: [
      "Ove uslove možemo izmeniti kada se promeni VTG, propisi ili način pružanja usluge. Nova verzija stupa na snagu objavljivanjem na ovoj stranici, uz navođenje datuma. Poslednje ažuriranje: 30. avgust 2026.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#07111f] px-6 py-16 text-white">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-bold text-amber-300 hover:text-amber-200">
          VTG početna
        </Link>
        <h1 className="mt-8 text-4xl font-black md:text-5xl">Uslovi korišćenja</h1>
        <p className="mt-5 leading-8 text-slate-300">
          Ova verzija predstavlja javni nacrt zasnovan na trenutno poznatim VTG funkcijama. Cene, pretplate i operativni detalji biće dopunjeni pre njihove aktivacije.
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
