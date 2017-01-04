/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
package com.adobe.cq.wcm.core.components.models.impl.v1;

import java.text.DateFormat;
import java.util.Calendar;

import com.adobe.cq.wcm.core.components.commons.jackson.impl.PageSerializer;
import com.adobe.cq.wcm.core.components.models.ListItem;
import com.day.cq.wcm.api.Page;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

public class ListItemImpl implements ListItem {


    private Page page;
    private DateFormat dateFormat;

    public ListItemImpl(Page page, DateFormat dateFormat) {
        this.page = page;
        this.dateFormat = dateFormat;
    }

    @Override
    public String getModificationDateString() {
        Calendar lastModified = page.getLastModified();
        dateFormat.setCalendar(lastModified);
        return dateFormat.format(lastModified.getTime());
    }

    @Override
    public Page getPage() {
        return page;
    }
}
