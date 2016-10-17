/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2016 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
package com.adobe.cq.wcm.core.components.models.form;

/**
 * The form text field
 */
public interface TextField extends FormField{

    /**
     * checks if the field is multi-valued
     * @return {@code true} if the field is multi-valued <br>
     *     @{code false} otherwise
     */
    boolean isMultiValued();

    /**
     * checks if the field should be rendered read only on the page
     * @return {@code true} if the field should be read-only <br>
     *     {@code false} otherwise
     */
    boolean isReadOnly();

    /**
     * @return the default value of the field
     */
    String getDefaultValue();

    /**
     * @return the path of the resource to be used for a particular type of validation
     */
    String getConstraintType();

    /**
     * @return the message to be displayed when the constraint specified by {@link #getConstraintType()}
     *      is not fulfilled
     */
    String getConstraintMessage();

    /**
     * @return the css width of the field
     */
    String getWidth();

    /**
     * @return the html class to be added to the field
     */
    String getCssClass();

    /**
     * @return the number of rows the text area should display
     */
    int getRows();

    /**
     * @return the number of columns(visible width) the text areas should have
     */
    int getCols();
}
