/*
 *  Copyright 2016 Adobe Systems Incorporated
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

;(function(h, $){

    var pageUrl = window.CQ.CoreComponentsIT.pageRoot;
    pageUrl = pageUrl+"/page0"

    /**
     * Drag and Drop a Title component.
     */
    window.CQ.CoreComponentsIT.DragDropTitle = function (h, $) {
        return new h.TestCase("Drag and drop the form button")
            .execTestCase(window.CQ.CoreComponentsIT.CreatePage(h,$,pageUrl, "page0","CoreComponent TestPage",
                "/conf/core-components/settings/wcm/templates/core-components"))
            .execTestCase(window.CQ.CoreComponentsIT.DragDropConponent(h,$,"Core WCM Title Component",pageUrl))
            ;
    }

    /**
     * Check the Edit button for the Title component.
     */
    window.CQ.CoreComponentsIT.CheckEditButton = function (h, $) {
        return new h.TestCase("Check the edit button")
            //click on the component to see the Editable Toolbar
            .click("#OverlayWrapper")
            .click(".cq-Overlay.cq-draggable.cq-droptarget")
            .asserts.visible("#EditableToolbar")
            .click(".coral-Button.coral-Button--quiet.cq-editable-action.coral-Button--square[title='Edit']")
            //check de number of the button from the EditableToolbar
            .wait(500)
            .asserts.isTrue(function() {return hobs.find(".title.aem-GridColumn .cmp.cmp-title","#ContentFrame")})
            //.execFct(function() { hobs.find(".title.aem-GridColumn .cmp.cmp-title > h1","#ContentFrame").replaceWith("content test")})
            .execFct(function() {
                //Switch the context to the content frame
                oldContext = hobs.context();
                hobs.setContext(window.frames[0].frames['ContentFrame'])
                //Change the text
                var content = h.find(".title.aem-GridColumn .cmp.cmp-title > h1");
                content.html("Content test");
                //Switch context back
                hobs.setContext(oldContext.loadEl);
            })
            .wait(500)
            .click("#OverlayWrapper")
            .click(".cq-Overlay.cq-draggable.cq-droptarget")
        ;
    }

    window.CQ.CoreComponentsIT.CheckTitleType = function (h, $, index, value) {
        return new h.TestCase("Check title type")
            .wait(500)
            .execTestCase(window.CQ.CoreComponentsIT.OpenConfigureWindow(h, $))
            .click(".cq-dialog-content.coral-FixedColumn .coral-Button")
            .click(".coral-Overlay.coral3-Select-overlay.is-open .coral3-SelectList-item:eq("+index+")")
            .click(".cq-dialog-actions .coral-Icon.coral-Icon--check")
            .asserts.isTrue(function () {return h.find(".title.aem-GridColumn .cmp.cmp-title >"+ value,"#ContentFrame")})

    }

    /**
     * Function used for checking the type and the size of the Title component.
     */
    window.CQ.CoreComponentsIT.CheckTitleTypes = function (h, $) {
        var titleType = new h.TestCase ("Check title types");
        for (var i=0; i<= 6; i++) {
            var value = h.find(".coral-Overlay.coral3-Select-overlay.is-open .coral3-SelectList-item:eq(" + i + ")").val()
            titleType.execTestCase(window.CQ.CoreComponentsIT.CheckTitleType(h, $, i, value))
        }
        return titleType
    }

    /**
     * Check the Configure button for the Title component.
     */
    window.CQ.CoreComponentsIT.CheckConfigureButton = function (h, $){
        return new h.TestCase("Check the Configure button")
            .execTestCase(window.CQ.CoreComponentsIT.OpenConfigureWindow(h, $))
            .wait(500)
            .asserts.visible(".coral-Form-field.coral-Textfield[name='./jcr:title']")
            .fillInput(".coral-Form-field.coral-Textfield[name='./jcr:title']","Content name")
            .click(".cq-dialog-actions .coral-Icon.coral-Icon--check")

            .wait(500)
            .execTestCase(window.CQ.CoreComponentsIT.CheckTitleTypes(h, $))
        ;
    }

    new h.TestSuite("Core-Components Tests - Title", {path:"/apps/core/wcm/tests/core-components-it/Title.js",
        execBefore: hobs.steps.aem.commons.disableTutorials, execAfter:window.CQ.CoreComponentsIT.DeletePage(h, $,pageUrl), register: true})
        .addTestCase(window.CQ.CoreComponentsIT.DragDropTitle(h, $))
        .addTestCase(window.CQ.CoreComponentsIT.CheckEditButton(h, $))
        .addTestCase(window.CQ.CoreComponentsIT.CheckConfigureButton(h, $))
        .addTestCase(window.CQ.CoreComponentsIT.CheckEditableToolbar(h,$, 9))
    ;
}(hobs, jQuery));
