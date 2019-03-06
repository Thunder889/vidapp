import _ from 'lodash'
import React, { Component } from 'react'

export function paginate (items, pageNumber, pageSize) {
   const startIndex = (pageNumber - 1) * pageSize;
   const lastIndex = pages * pageNumber;

   _(items)
   .slice(startIndex)
   .take(pageSize)
   .value();

   return items.slice(startIndex, lastIndex)
   
}
