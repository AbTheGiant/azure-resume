// Copyright 2022 abiolaolajide
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const functionApi= '';

const getVisitCount = ()=> {
    let count = 30
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website Calling Function API")
        count= response.count
        document.getElementById("counter").innerText=count
    }).catch(function(error){
        console.log(error)
    })
}