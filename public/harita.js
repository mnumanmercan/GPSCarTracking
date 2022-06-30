var vue = new Vue({
  el: '#app',
  data: {
    name: name
  }
})
//--------------------------------------
const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 0;
var name = 'Numan';
function initMap() {
  const firstIndex = { lat: 59.42190595, lng: 17.82213388 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: firstIndex,
  });
  var i = 0;
  var i2 =0;
  // This event listener calls addMarker() when the map is clicked.

  var location1 = [
    {
    Latitude: 59.3791073,
    Longitude: 17.82848036,
    Car_ID: 1
    },
    {
    Latitude: 59.3791825,
    Longitude: 17.82848297,
    Car_ID: 1
    },
    {
    Latitude: 59.37911487,
    Longitude: 17.82854587,
    Car_ID: 1
    },
    {
    Latitude: 59.37708471,
    Longitude: 17.82805005,
    Car_ID: 1
    },
    {
    Latitude: 59.37322243,
    Longitude: 17.84177382,
    Car_ID: 1
    },
    {
    Latitude: 59.36903042,
    Longitude: 17.85270262,
    Car_ID: 1
    },
    {
    Latitude: 59.36581387,
    Longitude: 17.86162948,
    Car_ID: 1
    },
    {
    Latitude: 59.36324685,
    Longitude: 17.87024682,
    Car_ID: 1
    },
    {
    Latitude: 59.36351496,
    Longitude: 17.87114067,
    Car_ID: 1
    },
    {
    Latitude: 59.3637614,
    Longitude: 17.8718346,
    Car_ID: 1
    },
    {
    Latitude: 59.3631751,
    Longitude: 17.8750505,
    Car_ID: 1
    },
    {
    Latitude: 59.35881671,
    Longitude: 17.87178941,
    Car_ID: 1
    },
    {
    Latitude: 59.35276218,
    Longitude: 17.88313866,
    Car_ID: 1
    },
    {
    Latitude: 59.34822228,
    Longitude: 17.89139681,
    Car_ID: 1
    },
    {
    Latitude: 59.35005729,
    Longitude: 17.89833511,
    Car_ID: 1
    },
    {
    Latitude: 59.3550393,
    Longitude: 17.9068026,
    Car_ID: 1
    },
    {
    Latitude: 59.3589091,
    Longitude: 17.90745214,
    Car_ID: 1
    },
    {
    Latitude: 59.36397056,
    Longitude: 17.90284465,
    Car_ID: 1
    },
    {
    Latitude: 59.36604719,
    Longitude: 17.90083918,
    Car_ID: 1
    },
    {
    Latitude: 59.36618393,
    Longitude: 17.90128133,
    Car_ID: 1
    },
    {
    Latitude: 59.36642556,
    Longitude: 17.90127399,
    Car_ID: 1
    },
    {
    Latitude: 59.36642556,
    Longitude: 17.90127399,
    Car_ID: 1
    },
    {
    Latitude: 59.36640303,
    Longitude: 17.90123977,
    Car_ID: 1
    },
    {
    Latitude: 59.36337155,
    Longitude: 17.90373647,
    Car_ID: 1
    },
    {
    Latitude: 59.366436,
    Longitude: 17.90980863,
    Car_ID: 1
    },
    {
    Latitude: 59.42575365,
    Longitude: 17.94630246,
    Car_ID: 1
    },
    {
    Latitude: 59.42566548,
    Longitude: 17.94639677,
    Car_ID: 1
    },
    {
    Latitude: 59.42570682,
    Longitude: 17.94630888,
    Car_ID: 1
    },
    {
    Latitude: 59.42569468,
    Longitude: 17.94620455,
    Car_ID: 1
    },
    {
    Latitude: 59.42881104,
    Longitude: 17.94279595,
    Car_ID: 1
    },
    {
    Latitude: 59.42973869,
    Longitude: 17.93442945,
    Car_ID: 1
    },
    {
    Latitude: 59.4365418,
    Longitude: 17.93088276,
    Car_ID: 1
    },
    {
    Latitude: 59.44236254,
    Longitude: 17.9262152,
    Car_ID: 1
    },
    {
    Latitude: 59.45023583,
    Longitude: 17.92535612,
    Car_ID: 1
    },
    {
    Latitude: 59.4507076,
    Longitude: 17.9272169,
    Car_ID: 1
    },
    {
    Latitude: 59.4501666,
    Longitude: 17.93037671,
    Car_ID: 1
    },
    {
    Latitude: 59.45026287,
    Longitude: 17.9298065,
    Car_ID: 1
    },
    {
    Latitude: 59.45069016,
    Longitude: 17.92715368,
    Car_ID: 1
    },
    {
    Latitude: 59.45334396,
    Longitude: 17.92499964,
    Car_ID: 1
    },
    {
    Latitude: 59.46127656,
    Longitude: 17.92346726,
    Car_ID: 1
    },
    {
    Latitude: 59.4690869,
    Longitude: 17.9192549,
    Car_ID: 1
    },
    {
    Latitude: 59.47383684,
    Longitude: 17.91522897,
    Car_ID: 1
    },
    {
    Latitude: 59.47885464,
    Longitude: 17.9103239,
    Car_ID: 1
    },
    {
    Latitude: 59.47754298,
    Longitude: 17.90496038,
    Car_ID: 1
    },
    {
    Latitude: 59.4787131,
    Longitude: 17.9096272,
    Car_ID: 1
    },
    {
    Latitude: 59.4764414,
    Longitude: 17.91356556,
    Car_ID: 1
    },
    {
    Latitude: 59.4716379,
    Longitude: 17.91688885,
    Car_ID: 1
    },
    {
    Latitude: 59.46689001,
    Longitude: 17.92080612,
    Car_ID: 1
    },
    {
    Latitude: 59.45996093,
    Longitude: 17.9228529,
    Car_ID: 1
    },
    {
    Latitude: 59.45846949,
    Longitude: 17.91087522,
    Car_ID: 1
    },
    {
    Latitude: 59.45563722,
    Longitude: 17.91004643,
    Car_ID: 1
    },
    {
    Latitude: 59.45440598,
    Longitude: 17.9109805,
    Car_ID: 1
    },
    {
    Latitude: 59.45440598,
    Longitude: 17.9109805,
    Car_ID: 1
    },
    {
    Latitude: 59.33529228,
    Longitude: 18.07180673,
    Car_ID: 1
    },
    {
    Latitude: 59.3357193,
    Longitude: 18.072826,
    Car_ID: 1
    },
    {
    Latitude: 59.3334921,
    Longitude: 18.07559043,
    Car_ID: 1
    },
    {
    Latitude: 59.33315426,
    Longitude: 18.07591821,
    Car_ID: 1
    },
    {
    Latitude: 59.33294966,
    Longitude: 18.07178921,
    Car_ID: 1
    },
    {
    Latitude: 59.3342231,
    Longitude: 18.0710992,
    Car_ID: 1
    },
    {
    Latitude: 59.3298919,
    Longitude: 18.0623958,
    Car_ID: 1
    },
    {
    Latitude: 59.32940174,
    Longitude: 18.06059657,
    Car_ID: 1
    },
    {
    Latitude: 59.3301372,
    Longitude: 18.0619813,
    Car_ID: 1
    },
    {
    Latitude: 59.32423449,
    Longitude: 18.06626037,
    Car_ID: 1
    },
    {
    Latitude: 59.3202027,
    Longitude: 18.0685785,
    Car_ID: 1
    },
    {
    Latitude: 59.46996639,
    Longitude: 18.11863467,
    Car_ID: 1
    },
    {
    Latitude: 59.46977102,
    Longitude: 18.11908289,
    Car_ID: 1
    },
    {
    Latitude: 59.46977102,
    Longitude: 18.11908289,
    Car_ID: 1
    },
    {
    Latitude: 59.46977102,
    Longitude: 18.11908289,
    Car_ID: 1
    },
    {
    Latitude: 59.46977102,
    Longitude: 18.11908289,
    Car_ID: 1
    },
    {
    Latitude: 59.46958889,
    Longitude: 18.11986516,
    Car_ID: 1
    },
    {
    Latitude: 59.41500109,
    Longitude: 17.79801164,
    Car_ID: 1
    },
    {
    Latitude: 59.4147846,
    Longitude: 17.79796783,
    Car_ID: 1
    },
    {
    Latitude: 59.41397971,
    Longitude: 17.79777016,
    Car_ID: 1
    },
    {
    Latitude: 59.41604378,
    Longitude: 17.80732946,
    Car_ID: 1
    },
    {
    Latitude: 59.41839774,
    Longitude: 17.81430651,
    Car_ID: 1
    },
    {
    Latitude: 59.33606763,
    Longitude: 18.06680603,
    Car_ID: 1
    },
    {
    Latitude: 59.3361358,
    Longitude: 18.0693977,
    Car_ID: 1
    },
    {
    Latitude: 59.335107,
    Longitude: 18.070998,
    Car_ID: 1
    },
    {
    Latitude: 59.3342264,
    Longitude: 18.0708502,
    Car_ID: 1
    },
    {
    Latitude: 59.3338058,
    Longitude: 18.0659225,
    Car_ID: 1
    },
    {
    Latitude: 59.33251859,
    Longitude: 18.06085084,
    Car_ID: 1
    },
    {
    Latitude: 59.33083336,
    Longitude: 18.05700086,
    Car_ID: 1
    },
    {
    Latitude: 59.33008483,
    Longitude: 18.0504738,
    Car_ID: 1
    },
    {
    Latitude: 59.331052,
    Longitude: 18.0485016,
    Car_ID: 1
    },
    {
    Latitude: 59.33298416,
    Longitude: 18.04413652,
    Car_ID: 1
    },
    {
    Latitude: 59.33459604,
    Longitude: 18.03334688,
    Car_ID: 1
    },
    {
    Latitude: 59.3150223,
    Longitude: 18.0794125,
    Car_ID: 1
    },
    {
    Latitude: 59.31365754,
    Longitude: 18.08083968,
    Car_ID: 1
    },
    {
    Latitude: 59.31332379,
    Longitude: 18.08163816,
    Car_ID: 1
    },
    {
    Latitude: 59.31079409,
    Longitude: 18.08598656,
    Car_ID: 1
    },
    {
    Latitude: 59.308256,
    Longitude: 18.0798695,
    Car_ID: 1
    },
    {
    Latitude: 59.30776964,
    Longitude: 18.076688,
    Car_ID: 1
    },
    {
    Latitude: 59.30797332,
    Longitude: 18.0672638,
    Car_ID: 1
    },
    {
    Latitude: 59.31032625,
    Longitude: 18.05915718,
    Car_ID: 1
    },
    {
    Latitude: 59.33580951,
    Longitude: 18.06667188,
    Car_ID: 1
    },
    {
    Latitude: 59.33606969,
    Longitude: 18.06772596,
    Car_ID: 1
    },
    {
    Latitude: 59.33562167,
    Longitude: 18.07094543,
    Car_ID: 1
    },
    {
    Latitude: 59.33578422,
    Longitude: 18.06885525,
    Car_ID: 1
    },
    {
    Latitude: 59.33575296,
    Longitude: 18.06834758,
    Car_ID: 1
    },
    {
    Latitude: 59.33619478,
    Longitude: 18.06360719,
    Car_ID: 1
    },
    {
    Latitude: 59.3390852,
    Longitude: 18.06095594,
    Car_ID: 1
    },
    {
    Latitude: 59.34001968,
    Longitude: 18.06159804,
    Car_ID: 1
    },
    {
    Latitude: 59.34001968,
    Longitude: 18.06159804,
    Car_ID: 1
    },
    {
    Latitude: 59.33880394,
    Longitude: 18.06332384,
    Car_ID: 1
    },
    {
    Latitude: 59.33604289,
    Longitude: 18.06354063,
    Car_ID: 1
    },
    {
    Latitude: 59.3357102,
    Longitude: 18.06330831,
    Car_ID: 1
    },
    {
    Latitude: 59.3331514,
    Longitude: 18.0669717,
    Car_ID: 1
    },
    {
    Latitude: 59.3290834,
    Longitude: 18.0634226,
    Car_ID: 1
    },
    {
    Latitude: 59.3391491,
    Longitude: 17.984454,
    Car_ID: 1
    },
    {
    Latitude: 59.33910285,
    Longitude: 17.98463309,
    Car_ID: 1
    },
    {
    Latitude: 59.33909828,
    Longitude: 17.98451674,
    Car_ID: 1
    },
    {
    Latitude: 59.33909828,
    Longitude: 17.98451674,
    Car_ID: 1
    },
    {
    Latitude: 59.33912933,
    Longitude: 17.98458388,
    Car_ID: 1
    },
    {
    Latitude: 59.33924712,
    Longitude: 17.98447361,
    Car_ID: 1
    },
    {
    Latitude: 59.33896616,
    Longitude: 17.98435962,
    Car_ID: 1
    },
    {
    Latitude: 59.33883024,
    Longitude: 17.98421997,
    Car_ID: 1
    },
    {
    Latitude: 59.33833514,
    Longitude: 17.98278513,
    Car_ID: 1
    },
    {
    Latitude: 59.33825813,
    Longitude: 17.98116276,
    Car_ID: 1
    },
    {
    Latitude: 59.33618402,
    Longitude: 17.98519954,
    Car_ID: 1
    },
    {
    Latitude: 59.33366449,
    Longitude: 17.98968274,
    Car_ID: 1
    },
    {
    Latitude: 59.33341605,
    Longitude: 17.99001673,
    Car_ID: 1
    },
    {
    Latitude: 59.33348515,
    Longitude: 17.99598789,
    Car_ID: 1
    },
    {
    Latitude: 59.33142299,
    Longitude: 18.00867851,
    Car_ID: 1
    },
    {
    Latitude: 59.33107516,
    Longitude: 18.02025036,
    Car_ID: 1
    },
    {
    Latitude: 59.32840729,
    Longitude: 18.01873352,
    Car_ID: 1
    },
    {
    Latitude: 59.32881441,
    Longitude: 18.00933413,
    Car_ID: 1
    },
    {
    Latitude: 59.3288868,
    Longitude: 18.005403,
    Car_ID: 1
    },
    {
    Latitude: 59.32879336,
    Longitude: 18.00548142,
    Car_ID: 1
    },
    {
    Latitude: 59.32879336,
    Longitude: 18.00548142,
    Car_ID: 1
    },
    {
    Latitude: 59.32882533,
    Longitude: 18.00541378,
    Car_ID: 1
    },
    {
    Latitude: 59.32884131,
    Longitude: 18.00554545,
    Car_ID: 1
    },
    {
    Latitude: 59.3288709,
    Longitude: 18.0054165,
    Car_ID: 1
    },
    {
    Latitude: 59.33071476,
    Longitude: 18.06678201,
    Car_ID: 1
    },
    {
    Latitude: 59.3306376,
    Longitude: 18.0668576,
    Car_ID: 1
    },
    {
    Latitude: 59.32954297,
    Longitude: 18.06620929,
    Car_ID: 1
    },
    {
    Latitude: 59.32871742,
    Longitude: 18.06264442,
    Car_ID: 1
    },
    {
    Latitude: 59.32941847,
    Longitude: 18.06051203,
    Car_ID: 1
    },
    {
    Latitude: 59.33061088,
    Longitude: 18.05944524,
    Car_ID: 1
    },
    {
    Latitude: 59.33323133,
    Longitude: 18.0568894,
    Car_ID: 1
    },
    {
    Latitude: 59.33397254,
    Longitude: 18.0561907,
    Car_ID: 1
    },
    {
    Latitude: 59.33618593,
    Longitude: 18.05123536,
    Car_ID: 1
    },
    {
    Latitude: 59.33733885,
    Longitude: 18.05140252,
    Car_ID: 1
    },
    {
    Latitude: 59.33991531,
    Longitude: 18.0516424,
    Car_ID: 1
    },
    {
    Latitude: 59.33970166,
    Longitude: 18.05573652,
    Car_ID: 1
    },
    {
    Latitude: 59.3390312,
    Longitude: 18.05641142,
    Car_ID: 1
    },
    {
    Latitude: 59.33876122,
    Longitude: 18.0565821,
    Car_ID: 1
    },
    {
    Latitude: 59.33812456,
    Longitude: 18.0611189,
    Car_ID: 1
    },
    {
    Latitude: 59.3363662,
    Longitude: 18.06282105,
    Car_ID: 1
    },
    {
    Latitude: 59.33642764,
    Longitude: 18.06274502,
    Car_ID: 1
    },
    {
    Latitude: 59.2981545,
    Longitude: 18.0875639,
    Car_ID: 1
    },
    {
    Latitude: 59.2981545,
    Longitude: 18.0875639,
    Car_ID: 1
    },
    {
    Latitude: 59.29815447,
    Longitude: 18.08756385,
    Car_ID: 1
    },
    {
    Latitude: 59.298182,
    Longitude: 18.0875818,
    Car_ID: 1
    },
    {
    Latitude: 59.29818724,
    Longitude: 18.08754662,
    Car_ID: 1
    },
    {
    Latitude: 59.2981858,
    Longitude: 18.0875578,
    Car_ID: 1
    },
    {
    Latitude: 59.29835607,
    Longitude: 18.08905029,
    Car_ID: 1
    },
    {
    Latitude: 59.29976227,
    Longitude: 18.08644917,
    Car_ID: 1
    },
    {
    Latitude: 59.30070328,
    Longitude: 18.0945485,
    Car_ID: 1
    },
    {
    Latitude: 59.30126261,
    Longitude: 18.10222373,
    Car_ID: 1
    },
    {
    Latitude: 59.30155826,
    Longitude: 18.10504126,
    Car_ID: 1
    },
    {
    Latitude: 59.3820621,
    Longitude: 17.9157875,
    Car_ID: 1
    },
    {
    Latitude: 59.38297465,
    Longitude: 17.92188307,
    Car_ID: 1
    },
    {
    Latitude: 59.38291431,
    Longitude: 17.92187837,
    Car_ID: 1
    },
    {
    Latitude: 59.37999688,
    Longitude: 17.9193845,
    Car_ID: 1
    },
    {
    Latitude: 59.37820795,
    Longitude: 17.91618824,
    Car_ID: 1
    },
    {
    Latitude: 59.3744632,
    Longitude: 17.92459785,
    Car_ID: 1
    },
    {
    Latitude: 59.3718053,
    Longitude: 17.93531228,
    Car_ID: 1
    },
    {
    Latitude: 59.3703967,
    Longitude: 17.94408039,
    Car_ID: 1
    },
    {
    Latitude: 59.3662044,
    Longitude: 17.95294998,
    Car_ID: 1
    },
    {
    Latitude: 59.36711029,
    Longitude: 17.9655243,
    Car_ID: 1
    },
    {
    Latitude: 59.36731987,
    Longitude: 17.96719816,
    Car_ID: 1
    },
    {
    Latitude: 59.36558974,
    Longitude: 17.97212817,
    Car_ID: 1
    },
    {
    Latitude: 59.36510858,
    Longitude: 17.97337538,
    Car_ID: 1
    },
    {
    Latitude: 59.36510858,
    Longitude: 17.97337538,
    Car_ID: 1
    },
    {
    Latitude: 59.36510858,
    Longitude: 17.97337538,
    Car_ID: 1
    },
    {
    Latitude: 59.3423692,
    Longitude: 18.0977917,
    Car_ID: 1
    },
    {
    Latitude: 59.34131576,
    Longitude: 18.08898484,
    Car_ID: 1
    },
    {
    Latitude: 59.33870375,
    Longitude: 18.08452191,
    Car_ID: 1
    },
    {
    Latitude: 59.33503251,
    Longitude: 18.08186334,
    Car_ID: 1
    },
    {
    Latitude: 59.33223486,
    Longitude: 18.07865201,
    Car_ID: 1
    },
    {
    Latitude: 59.332956,
    Longitude: 18.075471,
    Car_ID: 1
    },
    {
    Latitude: 59.3325131,
    Longitude: 18.07178104,
    Car_ID: 1
    },
    {
    Latitude: 59.32971612,
    Longitude: 18.07311823,
    Car_ID: 1
    },
    {
    Latitude: 59.32894309,
    Longitude: 18.06916702,
    Car_ID: 1
    },
    {
    Latitude: 59.327924,
    Longitude: 18.0726213,
    Car_ID: 1
    },
    {
    Latitude: 59.45289186,
    Longitude: 17.829889,
    Car_ID: 2
    },
    {
    Latitude: 59.44994302,
    Longitude: 17.83107304,
    Car_ID: 2
    },
    {
    Latitude: 59.4465511,
    Longitude: 17.82546617,
    Car_ID: 2
    },
    {
    Latitude: 59.4402223,
    Longitude: 17.82659895,
    Car_ID: 2
    },
    {
    Latitude: 59.43583904,
    Longitude: 17.82837169,
    Car_ID: 2
    },
    {
    Latitude: 59.4327329,
    Longitude: 17.8291434,
    Car_ID: 2
    },
    {
    Latitude: 59.4301858,
    Longitude: 17.8318433,
    Car_ID: 2
    },
    {
    Latitude: 59.42624523,
    Longitude: 17.83301682,
    Car_ID: 2
    },
    {
    Latitude: 59.42436382,
    Longitude: 17.83357638,
    Car_ID: 2
    },
    {
    Latitude: 59.42436382,
    Longitude: 17.83357638,
    Car_ID: 2
    },
    {
    Latitude: 59.4242763,
    Longitude: 17.8338296,
    Car_ID: 2
    },
    {
    Latitude: 59.4243638,
    Longitude: 17.8335764,
    Car_ID: 2
    },
    {
    Latitude: 59.509558,
    Longitude: 17.755313,
    Car_ID: 2
    },
    {
    Latitude: 59.50958428,
    Longitude: 17.75529994,
    Car_ID: 2
    },
    {
    Latitude: 59.50949015,
    Longitude: 17.75536135,
    Car_ID: 2
    },
    {
    Latitude: 59.50954192,
    Longitude: 17.75525865,
    Car_ID: 2
    },
    {
    Latitude: 59.5094284,
    Longitude: 17.7557604,
    Car_ID: 2
    },
    {
    Latitude: 59.51016355,
    Longitude: 17.74941191,
    Car_ID: 2
    },
    {
    Latitude: 59.50298231,
    Longitude: 17.74688495,
    Car_ID: 2
    },
    {
    Latitude: 59.4773399,
    Longitude: 17.79389102,
    Car_ID: 2
    },
    {
    Latitude: 59.47079077,
    Longitude: 17.81286741,
    Car_ID: 2
    },
    {
    Latitude: 59.46097275,
    Longitude: 17.82513868,
    Car_ID: 2
    },
    {
    Latitude: 59.4509761,
    Longitude: 17.8356018,
    Car_ID: 2
    },
    {
    Latitude: 59.43932171,
    Longitude: 17.84304526,
    Car_ID: 2
    },
    {
    Latitude: 59.43178163,
    Longitude: 17.84700427,
    Car_ID: 2
    },
    {
    Latitude: 59.3357382,
    Longitude: 18.0464937,
    Car_ID: 2
    },
    {
    Latitude: 59.33749197,
    Longitude: 18.03521719,
    Car_ID: 2
    },
    {
    Latitude: 59.3428057,
    Longitude: 18.0257527,
    Car_ID: 2
    },
    {
    Latitude: 59.3466913,
    Longitude: 18.0306415,
    Car_ID: 2
    },
    {
    Latitude: 59.35844377,
    Longitude: 18.02966448,
    Car_ID: 2
    },
    {
    Latitude: 59.37100622,
    Longitude: 18.02001743,
    Car_ID: 2
    },
    {
    Latitude: 59.38174999,
    Longitude: 18.00919035,
    Car_ID: 2
    },
    {
    Latitude: 59.39091206,
    Longitude: 17.99483073,
    Car_ID: 2
    },
    {
    Latitude: 59.3968524,
    Longitude: 17.98161356,
    Car_ID: 2
    },
    {
    Latitude: 59.40152496,
    Longitude: 17.96766671,
    Car_ID: 2
    },
    {
    Latitude: 59.3688993,
    Longitude: 17.9156767,
    Car_ID: 2
    },
    {
    Latitude: 59.3708532,
    Longitude: 17.9197668,
    Car_ID: 2
    },
    {
    Latitude: 59.3740011,
    Longitude: 17.9244331,
    Car_ID: 2
    },
    {
    Latitude: 59.380187,
    Longitude: 17.9334169,
    Car_ID: 2
    },
    {
    Latitude: 59.3895267,
    Longitude: 17.9462944,
    Car_ID: 2
    },
    {
    Latitude: 59.3979871,
    Longitude: 17.9515591,
    Car_ID: 2
    },
    {
    Latitude: 59.4016659,
    Longitude: 17.9454146,
    Car_ID: 2
    },
    {
    Latitude: 59.40505386,
    Longitude: 17.94073518,
    Car_ID: 2
    },
    {
    Latitude: 59.40804945,
    Longitude: 17.93106647,
    Car_ID: 2
    },
    {
    Latitude: 59.41218203,
    Longitude: 17.9230965,
    Car_ID: 2
    },
    {
    Latitude: 59.41404878,
    Longitude: 17.92496951,
    Car_ID: 2
    },
    {
    Latitude: 59.41404878,
    Longitude: 17.92496951,
    Car_ID: 2
    },
    {
    Latitude: 59.4138886,
    Longitude: 17.9250392,
    Car_ID: 2
    },
    {
    Latitude: 59.4147297,
    Longitude: 17.92440031,
    Car_ID: 2
    },
    {
    Latitude: 59.41855034,
    Longitude: 17.91585653,
    Car_ID: 2
    },
    {
    Latitude: 59.41868845,
    Longitude: 17.90942085,
    Car_ID: 2
    },
    {
    Latitude: 59.4097052,
    Longitude: 17.8445327,
    Car_ID: 2
    },
    {
    Latitude: 59.4034138,
    Longitude: 17.8447354,
    Car_ID: 2
    },
    {
    Latitude: 59.40975086,
    Longitude: 17.84471386,
    Car_ID: 2
    },
    {
    Latitude: 59.40945861,
    Longitude: 17.84476584,
    Car_ID: 2
    },
    {
    Latitude: 59.40905734,
    Longitude: 17.84363323,
    Car_ID: 2
    },
    {
    Latitude: 59.40729006,
    Longitude: 17.84185013,
    Car_ID: 2
    },
    {
    Latitude: 59.50950291,
    Longitude: 17.75528232,
    Car_ID: 2
    },
    {
    Latitude: 59.50949,
    Longitude: 17.7552778,
    Car_ID: 2
    },
    {
    Latitude: 59.5094818,
    Longitude: 17.75536443,
    Car_ID: 2
    },
    {
    Latitude: 59.5095,
    Longitude: 17.7553928,
    Car_ID: 2
    },
    {
    Latitude: 59.50948449,
    Longitude: 17.75537212,
    Car_ID: 2
    },
    {
    Latitude: 59.5094847,
    Longitude: 17.7553448,
    Car_ID: 2
    },
    {
    Latitude: 59.50948718,
    Longitude: 17.75537037,
    Car_ID: 2
    },
    {
    Latitude: 59.50949425,
    Longitude: 17.75534697,
    Car_ID: 2
    },
    {
    Latitude: 59.50950029,
    Longitude: 17.75536081,
    Car_ID: 2
    },
    {
    Latitude: 59.50950473,
    Longitude: 17.75538184,
    Car_ID: 2
    },
    {
    Latitude: 59.50948488,
    Longitude: 17.75539138,
    Car_ID: 2
    },
    {
    Latitude: 59.50948261,
    Longitude: 17.75542131,
    Car_ID: 2
    },
    {
    Latitude: 59.50948416,
    Longitude: 17.75541561,
    Car_ID: 2
    },
    {
    Latitude: 59.50947312,
    Longitude: 17.75544228,
    Car_ID: 2
    },
    {
    Latitude: 59.50947276,
    Longitude: 17.75542311,
    Car_ID: 2
    },
    {
    Latitude: 59.50947579,
    Longitude: 17.75543321,
    Car_ID: 2
    },
    {
    Latitude: 59.50947861,
    Longitude: 17.75552301,
    Car_ID: 2
    },
    {
    Latitude: 59.50948183,
    Longitude: 17.75544499,
    Car_ID: 2
    },
    {
    Latitude: 59.50948902,
    Longitude: 17.75541679,
    Car_ID: 2
    },
    {
    Latitude: 59.50948277,
    Longitude: 17.75541893,
    Car_ID: 2
    },
    {
    Latitude: 59.5094975,
    Longitude: 17.75544501,
    Car_ID: 2
    },
    {
    Latitude: 59.50950081,
    Longitude: 17.75544754,
    Car_ID: 2
    },
    {
    Latitude: 59.5095213,
    Longitude: 17.7553779,
    Car_ID: 2
    },
    {
    Latitude: 59.509518,
    Longitude: 17.7553723,
    Car_ID: 2
    },
    {
    Latitude: 59.50953188,
    Longitude: 17.75526139,
    Car_ID: 2
    },
    {
    Latitude: 59.5095409,
    Longitude: 17.7553145,
    Car_ID: 2
    },
    {
    Latitude: 59.5095417,
    Longitude: 17.7553164,
    Car_ID: 2
    },
    {
    Latitude: 59.5095438,
    Longitude: 17.7553172,
    Car_ID: 2
    },
    {
    Latitude: 59.50954098,
    Longitude: 17.75528356,
    Car_ID: 2
    },
    {
    Latitude: 59.50955896,
    Longitude: 17.75526804,
    Car_ID: 2
    },
    {
    Latitude: 59.50952301,
    Longitude: 17.75529449,
    Car_ID: 2
    },
    {
    Latitude: 59.50955551,
    Longitude: 17.75532,
    Car_ID: 2
    },
    {
    Latitude: 59.50954263,
    Longitude: 17.75528348,
    Car_ID: 2
    },
    {
    Latitude: 59.5294807,
    Longitude: 17.6350664,
    Car_ID: 2
    },
    {
    Latitude: 59.52606771,
    Longitude: 17.62528744,
    Car_ID: 2
    },
    {
    Latitude: 59.51894138,
    Longitude: 17.61761642,
    Car_ID: 2
    },
    {
    Latitude: 59.52112905,
    Longitude: 17.60231994,
    Car_ID: 2
    },
    {
    Latitude: 59.5350339,
    Longitude: 17.5708735,
    Car_ID: 2
    },
    {
    Latitude: 59.53183411,
    Longitude: 17.576057,
    Car_ID: 2
    },
    {
    Latitude: 59.35208242,
    Longitude: 17.95599683,
    Car_ID: 2
    },
    {
    Latitude: 59.3538589,
    Longitude: 17.9589571,
    Car_ID: 2
    },
    {
    Latitude: 59.3581028,
    Longitude: 17.9484627,
    Car_ID: 2
    },
    {
    Latitude: 59.36462739,
    Longitude: 17.94383626,
    Car_ID: 2
    },
    {
    Latitude: 59.37150483,
    Longitude: 17.93818479,
    Car_ID: 2
    }
  ]

  setInterval(() => {
      var naviga = { lat: location1[i].Latitude, lng: location1[i].Longitude }
      addMarker(naviga, map);
    i++;
  }, 10)
  setInterval(()=>{
    
      var naviga = { lat: location1[i].Latitude, lng: location1[i].Longitude }
      addMarker2(naviga, map);
    i2++;
  },10)
  // Add a marker at the center of the map.
  addMarker(firstIndex, map);
}

/*
mongoClient.connect(url, (err, client) => {
                  if (err) throw err;
                  
                  const mydb = client.db('Cars');
                  console.log('MongoDB baglantisi basariyla gerceklestirildi...');
                  var mySort = { Car_ID: 1 };
                  mydb.collection("MNM'sCar").find({Car_ID:result[0].id}).sort(mySort).toArray((err, result) => {
                      if (err) throw err;
                      for (let i = 0; i < result.length; i++) {
                          console.log(result[i].Car_ID, '', result[i].Latitude, '', result[i].Longitude);
                      }

                      client.close();
                  })
              })
*/

// Adds a marker to the map.
function addMarker(location1, map) {
  // Add the marker at the clicked location1, and add the next-available label
  // from the array of alphabetical characters.
  new google.maps.Marker({
    position: location1,
    label: labels[labelIndex++ % labels.length],
    map: map,
    type: "Untitled.png"
  });
}
function addMarker2(location1, map) {
  // Add the marker at the clicked location1, and add the next-available label
  // from the array of alphabetical characters.
  new google.maps.Marker({
    position: location1,
    label: labels[labelIndex++ % labels.length],
    map: map,
    icon: "Untitled.png"
  });
}