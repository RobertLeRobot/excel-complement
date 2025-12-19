(() => {
    "use strict";
    const e = "ms-excel:ofe|u|https://actuelia.sharepoint.com/:x:/r/sites/Planning-Dev/_layouts/15/Doc.aspx?sourcedoc=%7B92B818C0-9252-468E-B871-0127854FC9F7%7D&file=Planning%20-%20vDev.xlsx&action=default&mobileredirect=true";
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