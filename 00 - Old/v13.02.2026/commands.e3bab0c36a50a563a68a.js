(() => {
    "use strict";
    const e = "ms-excel:ofe|u|https://actuelia.sharepoint.com/:x:/s/Planning/IQBs2y_15Og1R4psqE4n7prgAWfHJ0nGpJ3Io8TKg7cj6Mk?e=29le5J";
    async function n(n) {
        try {
            await Excel.run(async n => {
                const o = n.workbook.properties;
                o.load("title"), await n.sync(), "PlanningActuelia" === o.title ? (console.log("Déjà sur le bon fichier, affichage du taskpane."), await Office.addin.showAsTaskpane()) : (console.log("Autre fichier, ouverture du planning SharePoint."), window.open(e, "_blank"))
            })
        } catch (n) {
            console.error("Erreur dans openPlanningFile:", n), window.open(e, "_blank")
        } finally {
            n && n.completed && n.completed()
        }
    }
    Office.onReady(() => {
        console.log("Complément Planning Actuelia prêt."), n()
    }), Office.actions.associate("openPlanningFile", n)
})();