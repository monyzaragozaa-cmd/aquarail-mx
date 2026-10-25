import fs from 'node:fs';
const seed = 11024; let state=seed;
const rand=()=>{state=(1664525*state+1013904223)>>>0;return state/4294967296};
const rows=Array.from({length:80},()=>{const pressureDrop=rand(),flowAnomaly=rand(),reportAge=rand(); const target=Math.max(0,Math.min(100,8+35*pressureDrop+37*flowAnomaly+15*reportAge+(rand()-.5)*10));return {pressureDrop,flowAnomaly,reportAge,target};});
const train=rows.slice(0,60),holdout=rows.slice(60);
// Genuine ordinary least squares via gradient descent on normalized synthetic features.
let weights=[0,0,0,0]; const lr=.18;
for(let k=0;k<15000;k++){const g=[0,0,0,0];for(const r of train){const x=[1,r.pressureDrop,r.flowAnomaly,r.reportAge];const error=weights.reduce((a,w,j)=>a+w*x[j],0)-r.target;for(let j=0;j<4;j++)g[j]+=error*x[j]/train.length;}for(let j=0;j<4;j++)weights[j]-=lr*g[j];}
const predict=r=>Math.max(0,Math.min(100,weights[0]+weights[1]*r.pressureDrop+weights[2]*r.flowAnomaly+weights[3]*r.reportAge));
const mae=holdout.reduce((s,r)=>s+Math.abs(predict(r)-r.target),0)/holdout.length;
const model={version:'synthetic-ols-v1',seed,trainingCount:train.length,holdoutCount:holdout.length,features:['pressureDrop','flowAnomaly','reportAge'],coefficients:weights,syntheticHoldoutMAE:Number(mae.toFixed(3)),disclaimer:'SOLO DATOS SINTÉTICOS. No predice resultados municipales, no confirma fugas y no asigna prioridad operativa.'};
fs.writeFileSync(new URL('../data/model-metadata.json',import.meta.url),JSON.stringify(model,null,2)+'\n');
console.log(`Synthetic model fitted: ${train.length} training, ${holdout.length} holdout; synthetic MAE ${model.syntheticHoldoutMAE}`);
