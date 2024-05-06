import './App.css';
import ViciCreative from './ViciCreative';
import galadari from '/images/galadari.png';
import ajmal from '/images/ajmal.png';
import nesquick from '/images/nesquick.png';
import du from '/images/du.png';
import hills from '/images/399hills.png';
import marvels from '/images/marvels.png';
import lamarquise from '/images/lamarquise.png';
import memoriesBiscuits from '/images/memoriesBiscuits.png';
import det from '/images/det.png';
import vici from '/images/vici.png';
import mashreq from '/images/mashreq.png';
import salam from '/images/salam.png';
import bankMuscat from '/images/bankMuscat.png';
import riyadhAir from '/images/riyadhAir.png';
import ford from '/images/ford.png';

function App() {
  const creatives = [
    {
      name: 'CPbanner68434703',
      src: 'https://track.adform.net/adfscript/?bn=68434703;cpjs=2;ord=[timestamp]',
      preview: marvels,
    },
    {
      name: 'CPbanner71049345',
      src: 'https://track.adform.net/adfscript/?bn=71049345;cpjs=2;ord=[timestamp]',
      preview: hills,
    },
    {
      name: 'CPbanner71113913',
      src: 'https://track.adform.net/adfscript/?bn=71113913;cpjs=2;ord=[timestamp]',
      preview: lamarquise,
    },
    {
      name: 'CPbanner71839746',
      src: 'https://track.adform.net/adfscript/?bn=71839746;cpjs=2;ord=[timestamp]',
      preview: nesquick,
    },
    {
      name: 'CPbanner70302739',
      src: 'https://track.adform.net/adfscript/?bn=70302739;cpjs=2;ord=[timestamp]',
      preview: vici,
    },
    {
      name: 'CPbanner71049425',
      src: 'https://track.adform.net/adfscript/?bn=71049425;cpjs=2;ord=[timestamp]',
      preview: du,
    },
    {
      name: 'CPbanner72062901',
      src: 'https://track.adform.net/adfscript/?bn=72062901;cpjs=2;ord=[timestamp]',
      preview: ajmal,
    },
    {
      name: 'CPbanner69298693',
      src: 'https://track.adform.net/adfscript/?bn=69298693;cpjs=2;ord=[timestamp]',
      preview: memoriesBiscuits,
    },
    {
      name: 'CPbanner72068041',
      src: 'https://track.adform.net/adfscript/?bn=72068041;cpjs=2;ord=[timestamp]',
      preview: galadari,
    },
    {
      name: 'CPbanner67514991',
      src: 'https://track.adform.net/adfscript/?bn=67514991;cpjs=2;ord=[timestamp]',
      preview: det,
    },
    {
      name: 'CPbanner66376565',
      src: 'https://track.adform.net/adfscript/?bn=66376565;cpjs=2;ord=[timestamp]',
      preview: salam,
    },
    {
      name: 'CPbanner65974149',
      src: 'https://track.adform.net/adfscript/?bn=65974149;cpjs=2;ord=[timestamp]',
      preview: riyadhAir,
    },
    {
      name: 'CPbanner66799352',
      src: 'https://track.adform.net/adfscript/?bn=66799352;cpjs=2;ord=[timestamp]',
      preview: bankMuscat,
    },
    {
      name: 'CPbanner65718900',
      src: 'https://track.adform.net/adfscript/?bn=65718900;cpjs=2;ord=[timestamp]',
      preview: ford,
    },
    {
      name: 'CPbanner65598468',
      src: 'https://track.adform.net/adfscript/?bn=65598468;cpjs=2;ord=[timestamp]',
      preview: mashreq,
    },
  ];
  return (
    <>
      <h3>
        Hi! Welcome to a simple webpage wherein some of the work that I&apos;ve done as a Frontend Developer with my current company, Globmobi, are
        shown. Each one of the creatives below is called a VICI Creative, where serves as the company&apos;s main advertisement product. Each VICI
        Creative is developed using vanilla Javascript, jQuery, HTML, CSS and are later served using Adform.
      </h3>
      <div className="vici-showcase-container">
        {creatives?.map((creative, index) => {
          return (
            <div key={index}>
              <ViciCreative creative={creative}></ViciCreative>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
