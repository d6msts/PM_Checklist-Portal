const checklistDB = {

INVERTER: [

{sr:1, check:"Check the appearance of the Inverter for damage or deformation.", req:"No damage", freq:"HY"},
{sr:2, check:"Check for dust and dirt in the inverter", req:"Should be Cleaned", freq:"HY"},
{sr:3, check:"Check ventilation fans and air grates", req:"Should work properly", freq:"M"},
{sr:4, check:"Listen for abnormal sounds during inverter operation", req:"No abnormal Noise", freq:"HY"},
{sr:5, check:"Check cable connections are not loose", req:"No loose", freq:"M"},
{sr:6, check:"Check cable surface for damage or cuts", req:"No damaged", freq:"HY"},
{sr:7, check:"Check all grounding cables", req:"Should be Grounded", freq:"M"},
{sr:8, check:"Tightening of all cables and distribution connections", req:"Retorque all bolts", freq:"Y"},
{sr:9, check:"Check healthiness of installed fuse", req:"Healthy", freq:"HY"},
{sr:10, check:"Thermographic inspection of inverter electrical connections", req:"Perform Thermography", freq:"Y"},
{sr:11, check:"Check healthiness of SPD", req:"Should work properly", freq:"HY"},
{sr:12, check:"Check inverter door locks", req:"Should be locked", freq:"Y"},
{sr:13, check:"Comprehensive inspection of inverter internal components", req:"Should work properly", freq:"HY"},
{sr:14, check:"Visual inspection and functional test of protective devices", req:"All should be tested", freq:"HY"},
{sr:15, check:"Inspection of cabling and grounding", req:"Properly fixed", freq:"HY"},
{sr:16, check:"Check warning labels visibility", req:"Properly visible", freq:"Y"}

],

IDT: [

{sr:1, check:"Replacement / Regeneration of Silica gel Breather if necessary", req:"Should be Working Fine", freq:"A"},
{sr:2, check:"Dissolved Gas Analysis", req:"H2<100ppm, CH4<120ppm, C2H2<35ppm, C2H4<50ppm, C2H6<65ppm, CO<350ppm, CO2<2500ppm", freq:"A"},
{sr:3, check:"Oil Sampling", req:"BDV>60kV, Moisture<15PPM, Acidity<0.3MG KOH/G", freq:"A"},
{sr:4, check:"Buchholz Relay Functional Tests", req:"Perform the functional test", freq:"H"},
{sr:5, check:"Tan Delta & Capacitance Measurement of Condenser Bushings", req:"Record the Value", freq:"A"},
{sr:6, check:"OTI / WTI Tests", req:"Check the calibration", freq:"H"},
{sr:7, check:"Tap changer operation", req:"Record the Position", freq:"A"},
{sr:8, check:"Insulation Resistance of Windings", req:"Should be in Giga ohm", freq:"A"},
{sr:9, check:"Check earthing connection", req:"Firmly Tightened", freq:"H"},
{sr:10, check:"Check damage or corrosion on radiator / external area", req:"No Corrosion", freq:"M"},
{sr:11, check:"Visual inspection of transformer for abnormal sound", req:"No abnormal sounds", freq:"M"},
{sr:12, check:"Check oil leakage from HV/LV bushings", req:"No Oil Leakages", freq:"M"},
{sr:13, check:"Check PRD device", req:"Should be operative", freq:"M"},
{sr:14, check:"Check oil temperature and winding temperature", req:"Record the Value", freq:"M"},
{sr:15, check:"Check bushing for cracks or damage", req:"No Crack", freq:"A"},
{sr:16, check:"Check wheel blocking", req:"Should be Intact", freq:"A"},
{sr:17, check:"Check antivibration pad status", req:"Should be in place", freq:"A"},
{sr:18, check:"Check MOG", req:"Note down the Value", freq:"M"},
{sr:19, check:"Check fasteners for corrosion", req:"No corrosion", freq:"M"},
{sr:20, check:"Check silica gel color", req:"Shall be blue in color", freq:"M"},
{sr:21, check:"Check transformer cable terminations", req:"Should be fine", freq:"A"},
{sr:22, check:"Visual inspection of transformer and cabinet", req:"Should be fine", freq:"M"},
{sr:23, check:"Visual inspection of insulator connections", req:"No Crack", freq:"M"},
{sr:24, check:"Visual inspection of transformer sealing joints", req:"Should be fine", freq:"M"},
{sr:25, check:"Visual inspection of optical and acoustic indicators", req:"Working fine", freq:"M"},
{sr:26, check:"Visual inspection of WTI and OTI", req:"Should be working fine", freq:"M"},
{sr:27, check:"Visual inspection of transformer soak ground wells", req:"Should be Clean", freq:"M"},
{sr:28, check:"Check alarm test", req:"Should be fine", freq:"H"},
{sr:29, check:"Check auxiliary relays", req:"Working fine", freq:"H"},
{sr:30, check:"Check operation of switchgear", req:"Operate", freq:"H"},
{sr:31, check:"Check protection relay operation", req:"Working fine", freq:"H"},
{sr:32, check:"Check heating elements", req:"Operate", freq:"H"},
{sr:33, check:"Check rust removal of transformer", req:"Rustfree", freq:"A"},
{sr:34, check:"Transformer touch-up paint", req:"Good Condition", freq:"A"},
{sr:35, check:"Gasket repairs", req:"Should be fine", freq:"A"},
{sr:36, check:"Check terminal connections", req:"Should be fine", freq:"A"},
{sr:37, check:"Test ratio measurement", req:"Should be fine", freq:"A"},
{sr:38, check:"Insulation resistance of protective wiring cables", req:"Should be fine", freq:"A"},
{sr:39, check:"Oil top-up", req:"If required", freq:"A"}

],

RMU: [

{sr:1, check:"Check the pressure gauge for cracks, damage or abnormal condition", req:"No Crack or damages", freq:"Y"},
{sr:3, check:"Check bus bar gas pressure indicator", req:"Note the Pressure Value", freq:"Y"},
{sr:4, check:"Check deformation and cleanliness of RMU", req:"Should be Clean", freq:"Y"},
{sr:5, check:"Check operating mechanism and switch control", req:"Should be Working Fine", freq:"Q"},
{sr:6, check:"Check interlocking system", req:"Should be Working Fine", freq:"Q"},
{sr:7, check:"Check RMU protection system", req:"Should be Working Fine", freq:"Q"},
{sr:8, check:"Check alarm functional tests", req:"Should be Working Fine", freq:"Q"},
{sr:9, check:"Check switchgear accessories", req:"Should be Working Fine", freq:"Q"},
{sr:10, check:"Check abnormal noise or smell", req:"No abnormal noise or smell", freq:"Y"},
{sr:11, check:"Check auxiliary supply isolation", req:"Should be Working Fine", freq:"Y"},
{sr:12, check:"Check grounding connection", req:"Should be Working Fine", freq:"Y"},
{sr:13, check:"Lubricate interlock contact parts", req:"Should be done", freq:"Y"}

],

RIO_PANEL: [

{sr:1, check:"Visual inspection of RIO Panel", req:"No rust", freq:"M"},
{sr:2, check:"Ensure panel door closed properly", req:"Should be properly locked", freq:"M"},
{sr:3, check:"Ensure cabling and earthing cable grounded", req:"Should be Grounded", freq:"M"},
{sr:4, check:"Check SPD healthiness", req:"Should work properly", freq:"M"},
{sr:5, check:"Check communication switches", req:"Should work properly", freq:"M"},
{sr:6, check:"Check communication cables", req:"Should work properly", freq:"M"},
{sr:7, check:"Check cable glands sealing", req:"Hole sealing should be done", freq:"M"},
{sr:8, check:"Check terminal tightness", req:"No loose connection", freq:"M"},
{sr:9, check:"Check door sensor light", req:"Should work properly", freq:"M"},
{sr:10, check:"Check ventilation system", req:"Should work properly", freq:"M"},
{sr:11, check:"Clean panel interior", req:"Cleaned", freq:"M"},
{sr:12, check:"Check communication ring main", req:"Should work properly", freq:"M"}

],

UPS_BATTERIES: [

{sr:1, check:"Check UPS enclosure damage", req:"No damage", freq:"HY"},
{sr:2, check:"Ensure UPS and batteries clean condition", req:"Should be cleaned", freq:"HY"},
{sr:3, check:"Check UPS operational status", req:"Working healthy", freq:"HY"},
{sr:4, check:"Check abnormal UPS noise", req:"No abnormal noise", freq:"HY"},
{sr:5, check:"Check cable connections", req:"No loose", freq:"HY"},
{sr:6, check:"Check grounding cables", req:"Should be grounded", freq:"HY"},
{sr:7, check:"Check cable glands sealing", req:"Should be sealed", freq:"HY"},
{sr:8, check:"Battery testing with tester", req:"Testing required", freq:"HY"},
{sr:9, check:"Check UPS foundation", req:"No damage", freq:"HY"},
{sr:10, check:"Check exhaust fan", req:"Working", freq:"HY"}

],

NCU: [

{sr:1, check:"Check NCU enclosure damage", req:"No damage", freq:"A"},
{sr:2, check:"Check dust inside NCU box", req:"Should be cleaned", freq:"A"},
{sr:3, check:"Check NCU operation", req:"Working healthy", freq:"HY"},
{sr:4, check:"Check abnormal sound", req:"No abnormal noise", freq:"HY"},
{sr:5, check:"Check cable connections", req:"No loose", freq:"HY"},
{sr:6, check:"Check cable insulation damage", req:"No damaged", freq:"HY"},
{sr:7, check:"Check waterproof connector plug", req:"Should be plugged", freq:"HY"},
{sr:8, check:"Check grounding cables", req:"Should be grounded", freq:"HY"},
{sr:9, check:"Retorque combiner box screws", req:"Retorque all bolts", freq:"HY"},
{sr:10, check:"Thermography of PLC board", req:"Perform Thermography", freq:"A"},
{sr:11, check:"Check anemometer wind signal", req:"No malfunction", freq:"HY"},
{sr:12, check:"Check NCU mounting foundation", req:"No crack or damage", freq:"A"}

],

PD_BOX: [

{sr:1, check:"Visual inspection of PD Box enclosure", req:"No damage or rust", freq:"HY"},
{sr:2, check:"Check PD Box door locking", req:"Door should close properly", freq:"HY"},
{sr:3, check:"Check auxiliary AC supply availability", req:"Supply should be available", freq:"HY"},
{sr:4, check:"Check MCB/MCCB protection devices", req:"Working properly", freq:"HY"},
{sr:5, check:"Check cable termination tightness", req:"No loose connection", freq:"HY"},
{sr:6, check:"Check control wiring arrangement", req:"Proper routing", freq:"HY"},
{sr:7, check:"Check PD Box earthing", req:"Properly grounded", freq:"HY"},
{sr:8, check:"Check inverter-RMU interlocking key exchanger", req:"Interlock working", freq:"HY"},
{sr:9, check:"Check auxiliary relays", req:"Working properly", freq:"HY"},
{sr:10, check:"Check indicator lamps", req:"Working properly", freq:"HY"},
{sr:11, check:"Check cable gland sealing", req:"Proper sealing", freq:"HY"},
{sr:12, check:"Clean internal area of PD Box", req:"Panel should be clean", freq:"HY"},
{sr:13, check:"Verify warning labels visibility", req:"Labels visible", freq:"HY"}

]

};
