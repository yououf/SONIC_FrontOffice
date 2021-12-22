'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">SONIC documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AddCandidateModule.html" data-type="entity-link" >AddCandidateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddCandidateModule-5d1de0acbfc8cef8b1e55777c992aaf263178af9fb345a36d8b34727161ce8ddfa1e185b75eb30fe70ddeaebe02e8ec20dfc0fe9f5f103da1385f9088b233ebb"' : 'data-target="#xs-components-links-module-AddCandidateModule-5d1de0acbfc8cef8b1e55777c992aaf263178af9fb345a36d8b34727161ce8ddfa1e185b75eb30fe70ddeaebe02e8ec20dfc0fe9f5f103da1385f9088b233ebb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddCandidateModule-5d1de0acbfc8cef8b1e55777c992aaf263178af9fb345a36d8b34727161ce8ddfa1e185b75eb30fe70ddeaebe02e8ec20dfc0fe9f5f103da1385f9088b233ebb"' :
                                            'id="xs-components-links-module-AddCandidateModule-5d1de0acbfc8cef8b1e55777c992aaf263178af9fb345a36d8b34727161ce8ddfa1e185b75eb30fe70ddeaebe02e8ec20dfc0fe9f5f103da1385f9088b233ebb"' }>
                                            <li class="link">
                                                <a href="components/AddCandidateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddCandidateComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AddCandidateRoutingModule.html" data-type="entity-link" >AddCandidateRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-71cbc4054636db527e6e3b0e6780f7848b19bbb4ec0f51cb2e9a7cecb2ed21a3d86fd6dc1dd7dd542627d915fb17fe9f7bebde95327dad97544c36a05b3315b6"' : 'data-target="#xs-components-links-module-AdminModule-71cbc4054636db527e6e3b0e6780f7848b19bbb4ec0f51cb2e9a7cecb2ed21a3d86fd6dc1dd7dd542627d915fb17fe9f7bebde95327dad97544c36a05b3315b6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-71cbc4054636db527e6e3b0e6780f7848b19bbb4ec0f51cb2e9a7cecb2ed21a3d86fd6dc1dd7dd542627d915fb17fe9f7bebde95327dad97544c36a05b3315b6"' :
                                            'id="xs-components-links-module-AdminModule-71cbc4054636db527e6e3b0e6780f7848b19bbb4ec0f51cb2e9a7cecb2ed21a3d86fd6dc1dd7dd542627d915fb17fe9f7bebde95327dad97544c36a05b3315b6"' }>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SideNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopNavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f09236d6c45b8a421b674dcb00dce7461ae0b9e5e0b9dedb6286b718d33bcf92e7eef11a415c8f40911e8612aa1862c342963e79ed919ce9cbc184638cdc3466"' : 'data-target="#xs-components-links-module-AppModule-f09236d6c45b8a421b674dcb00dce7461ae0b9e5e0b9dedb6286b718d33bcf92e7eef11a415c8f40911e8612aa1862c342963e79ed919ce9cbc184638cdc3466"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f09236d6c45b8a421b674dcb00dce7461ae0b9e5e0b9dedb6286b718d33bcf92e7eef11a415c8f40911e8612aa1862c342963e79ed919ce9cbc184638cdc3466"' :
                                            'id="xs-components-links-module-AppModule-f09236d6c45b8a421b674dcb00dce7461ae0b9e5e0b9dedb6286b718d33bcf92e7eef11a415c8f40911e8612aa1862c342963e79ed919ce9cbc184638cdc3466"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChartsModule.html" data-type="entity-link" >ChartsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChartsModule-12bbc749b29dfd43945a38ebcbdbd207f041f58cb14542f7049c0fc25c17f96d5446fe26ab9f31b6f13bd12535ecb96cc1ef04463d6274dd8f507c125ff691c3"' : 'data-target="#xs-components-links-module-ChartsModule-12bbc749b29dfd43945a38ebcbdbd207f041f58cb14542f7049c0fc25c17f96d5446fe26ab9f31b6f13bd12535ecb96cc1ef04463d6274dd8f507c125ff691c3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChartsModule-12bbc749b29dfd43945a38ebcbdbd207f041f58cb14542f7049c0fc25c17f96d5446fe26ab9f31b6f13bd12535ecb96cc1ef04463d6274dd8f507c125ff691c3"' :
                                            'id="xs-components-links-module-ChartsModule-12bbc749b29dfd43945a38ebcbdbd207f041f58cb14542f7049c0fc25c17f96d5446fe26ab9f31b6f13bd12535ecb96cc1ef04463d6274dd8f507c125ff691c3"' }>
                                            <li class="link">
                                                <a href="components/BarChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BarChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DonutChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DonutChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LineChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LineChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PieChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PieChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PolarChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PolarChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RadarChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RadarChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ChartsModule-12bbc749b29dfd43945a38ebcbdbd207f041f58cb14542f7049c0fc25c17f96d5446fe26ab9f31b6f13bd12535ecb96cc1ef04463d6274dd8f507c125ff691c3"' : 'data-target="#xs-injectables-links-module-ChartsModule-12bbc749b29dfd43945a38ebcbdbd207f041f58cb14542f7049c0fc25c17f96d5446fe26ab9f31b6f13bd12535ecb96cc1ef04463d6274dd8f507c125ff691c3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ChartsModule-12bbc749b29dfd43945a38ebcbdbd207f041f58cb14542f7049c0fc25c17f96d5446fe26ab9f31b6f13bd12535ecb96cc1ef04463d6274dd8f507c125ff691c3"' :
                                        'id="xs-injectables-links-module-ChartsModule-12bbc749b29dfd43945a38ebcbdbd207f041f58cb14542f7049c0fc25c17f96d5446fe26ab9f31b6f13bd12535ecb96cc1ef04463d6274dd8f507c125ff691c3"' }>
                                        <li class="link">
                                            <a href="injectables/DataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChartsRoutingModule.html" data-type="entity-link" >ChartsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-93874ce8c891283ac3a2a4057823656efbdba9efa0ae1bf3a1771b507a96ae57523a394ea7b0184a9990a8fb375c81bb8941bfc497f4822eef36050eeb8fc279"' : 'data-target="#xs-components-links-module-DashboardModule-93874ce8c891283ac3a2a4057823656efbdba9efa0ae1bf3a1771b507a96ae57523a394ea7b0184a9990a8fb375c81bb8941bfc497f4822eef36050eeb8fc279"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-93874ce8c891283ac3a2a4057823656efbdba9efa0ae1bf3a1771b507a96ae57523a394ea7b0184a9990a8fb375c81bb8941bfc497f4822eef36050eeb8fc279"' :
                                            'id="xs-components-links-module-DashboardModule-93874ce8c891283ac3a2a4057823656efbdba9efa0ae1bf3a1771b507a96ae57523a394ea7b0184a9990a8fb375c81bb8941bfc497f4822eef36050eeb8fc279"' }>
                                            <li class="link">
                                                <a href="components/StatComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HelpModule.html" data-type="entity-link" >HelpModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HelpModule-5d5f53da579219dbbab4a1e69e1fe048c9cd15b9dd5cac306cc42cd5dd7333060244d3ff14ea718c5a1a6c04d1a7d3353bdc7426b0675cd91b1873eb437f796e"' : 'data-target="#xs-components-links-module-HelpModule-5d5f53da579219dbbab4a1e69e1fe048c9cd15b9dd5cac306cc42cd5dd7333060244d3ff14ea718c5a1a6c04d1a7d3353bdc7426b0675cd91b1873eb437f796e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HelpModule-5d5f53da579219dbbab4a1e69e1fe048c9cd15b9dd5cac306cc42cd5dd7333060244d3ff14ea718c5a1a6c04d1a7d3353bdc7426b0675cd91b1873eb437f796e"' :
                                            'id="xs-components-links-module-HelpModule-5d5f53da579219dbbab4a1e69e1fe048c9cd15b9dd5cac306cc42cd5dd7333060244d3ff14ea718c5a1a6c04d1a7d3353bdc7426b0675cd91b1873eb437f796e"' }>
                                            <li class="link">
                                                <a href="components/HelpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HelpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HelpRoutingModule.html" data-type="entity-link" >HelpRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-cbe2a132c44728482de459035c46066938971648157bc6ced4ec9b705d322d6b4ddd64f0bbc5c1e98827d954d823f4c27e3fb28ad5c4fb12f4af814ab6cf5b5e"' : 'data-target="#xs-components-links-module-LoginModule-cbe2a132c44728482de459035c46066938971648157bc6ced4ec9b705d322d6b4ddd64f0bbc5c1e98827d954d823f4c27e3fb28ad5c4fb12f4af814ab6cf5b5e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-cbe2a132c44728482de459035c46066938971648157bc6ced4ec9b705d322d6b4ddd64f0bbc5c1e98827d954d823f4c27e3fb28ad5c4fb12f4af814ab6cf5b5e"' :
                                            'id="xs-components-links-module-LoginModule-cbe2a132c44728482de459035c46066938971648157bc6ced4ec9b705d322d6b4ddd64f0bbc5c1e98827d954d823f4c27e3fb28ad5c4fb12f4af814ab6cf5b5e"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link" >LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-ec09d784180a979b0afdc04a379ae540cd89c75ed0c78e1052dd7cb0c356d4f2238b2ec8678003eca3a2036926d06c240855e99d08452949a6cafdafee13b129"' : 'data-target="#xs-components-links-module-SharedModule-ec09d784180a979b0afdc04a379ae540cd89c75ed0c78e1052dd7cb0c356d4f2238b2ec8678003eca3a2036926d06c240855e99d08452949a6cafdafee13b129"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-ec09d784180a979b0afdc04a379ae540cd89c75ed0c78e1052dd7cb0c356d4f2238b2ec8678003eca3a2036926d06c240855e99d08452949a6cafdafee13b129"' :
                                            'id="xs-components-links-module-SharedModule-ec09d784180a979b0afdc04a379ae540cd89c75ed0c78e1052dd7cb0c356d4f2238b2ec8678003eca3a2036926d06c240855e99d08452949a6cafdafee13b129"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-ec09d784180a979b0afdc04a379ae540cd89c75ed0c78e1052dd7cb0c356d4f2238b2ec8678003eca3a2036926d06c240855e99d08452949a6cafdafee13b129"' : 'data-target="#xs-directives-links-module-SharedModule-ec09d784180a979b0afdc04a379ae540cd89c75ed0c78e1052dd7cb0c356d4f2238b2ec8678003eca3a2036926d06c240855e99d08452949a6cafdafee13b129"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-ec09d784180a979b0afdc04a379ae540cd89c75ed0c78e1052dd7cb0c356d4f2238b2ec8678003eca3a2036926d06c240855e99d08452949a6cafdafee13b129"' :
                                        'id="xs-directives-links-module-SharedModule-ec09d784180a979b0afdc04a379ae540cd89c75ed0c78e1052dd7cb0c356d4f2238b2ec8678003eca3a2036926d06c240855e99d08452949a6cafdafee13b129"' }>
                                        <li class="link">
                                            <a href="directives/RouterTab.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RouterTab</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/RouterTabs.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RouterTabs</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignupModule.html" data-type="entity-link" >SignupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SignupModule-af6925961d0f59f1bcac33536d7400308e26bf2729b9d163ac146f07082d2137ccae90623d98bf03827a8e4641fa724199c5aecc6a63829581fe6fee68bcacb1"' : 'data-target="#xs-components-links-module-SignupModule-af6925961d0f59f1bcac33536d7400308e26bf2729b9d163ac146f07082d2137ccae90623d98bf03827a8e4641fa724199c5aecc6a63829581fe6fee68bcacb1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignupModule-af6925961d0f59f1bcac33536d7400308e26bf2729b9d163ac146f07082d2137ccae90623d98bf03827a8e4641fa724199c5aecc6a63829581fe6fee68bcacb1"' :
                                            'id="xs-components-links-module-SignupModule-af6925961d0f59f1bcac33536d7400308e26bf2729b9d163ac146f07082d2137ccae90623d98bf03827a8e4641fa724199c5aecc6a63829581fe6fee68bcacb1"' }>
                                            <li class="link">
                                                <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignupRoutingModule.html" data-type="entity-link" >SignupRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TablesModule.html" data-type="entity-link" >TablesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TablesModule-b7d5590fa92d5f72e5f464c700416915202ef8fe0ed6c4eba12d8167cbbf966bd7069c429fab2239a0eb9fde4734a0dd6652ea5070f7dfd95dd026cad9b6ad07"' : 'data-target="#xs-components-links-module-TablesModule-b7d5590fa92d5f72e5f464c700416915202ef8fe0ed6c4eba12d8167cbbf966bd7069c429fab2239a0eb9fde4734a0dd6652ea5070f7dfd95dd026cad9b6ad07"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TablesModule-b7d5590fa92d5f72e5f464c700416915202ef8fe0ed6c4eba12d8167cbbf966bd7069c429fab2239a0eb9fde4734a0dd6652ea5070f7dfd95dd026cad9b6ad07"' :
                                            'id="xs-components-links-module-TablesModule-b7d5590fa92d5f72e5f464c700416915202ef8fe0ed6c4eba12d8167cbbf966bd7069c429fab2239a0eb9fde4734a0dd6652ea5070f7dfd95dd026cad9b6ad07"' }>
                                            <li class="link">
                                                <a href="components/SearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TablesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TablesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TablesRoutingModule.html" data-type="entity-link" >TablesRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/HomeComponent-1.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Candidate.html" data-type="entity-link" >Candidate</a>
                            </li>
                            <li class="link">
                                <a href="classes/MyErrorStateMatcher.html" data-type="entity-link" >MyErrorStateMatcher</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CandidateService.html" data-type="entity-link" >CandidateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChartService.html" data-type="entity-link" >ChartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link" >DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService-1.html" data-type="entity-link" >DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SearchService.html" data-type="entity-link" >SearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenStorageService.html" data-type="entity-link" >TokenStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link" >AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CandidateData.html" data-type="entity-link" >CandidateData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Place.html" data-type="entity-link" >Place</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Profile.html" data-type="entity-link" >Profile</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});