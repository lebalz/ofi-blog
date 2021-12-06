---
title: Zusammenfassung
---

# Zusammenfassung

## Das grosse Ganze

Verschlüsselte, signierte Nachrichten: Verknüpfung aller Verfahren.

![](images/the_big_picture.svg)

:::note Bemerke
- Charlie berechnet den Hashwert der Nachricht.
- Charlie verwendet seinen  <span className="badge" style={{background: 'teal'}}>privaten Schlüssel</span> um den Hashwert zu signieren.
  - Den signierten Hashwert kann von jeder Empfänger:in mit Charlies **öffentlichem** Schlüssel entschlüsselt werden. Jedoch kann der Hash von niemandem verändert werden, da niemand den privaten Schlüssel von Charlie besitzt.
- Die signierte Nachricht wird mit einem Sitzungsschlüssel **symmetrisch** verschlüsselt.
- Der Sitzungsschlüssel wird mit Alices <span className="badge" style={{background: '#d53189'}}>öffentlichem Schlüssel</span> verschlüsselt.
- Alice kann nun
  - den Sitzungsschlüssel mit ihrem <span className="badge" style={{background: '#d53189'}}>privaten Schlüssel</span> entschlüsseln
  - mit dem Sitzungsschlüssel den Klartext entschlüsseln
  - mit dem <span className="badge" style={{background: 'teal'}}>öffentlichen Schlüssel</span> von Charlie durch Entschlüsselung der Signatur die **Echtheit bestätigen**
  - mit der entschlüsselten Signatur (=der von Charlie berechneten Hashwert) und dem selbst berechneten Hashwert der erhaltenen Nachricht die **Integrität** der Nachricht verifizieren, wenn die beiden Hashwerte übereinstimmen.
:::