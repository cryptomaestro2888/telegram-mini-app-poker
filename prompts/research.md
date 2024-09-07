# Universiteit Antwerpen

This item is the archived peer-reviewed author-version of:

Does time series momentum also exist outside traditional financial markets? Near-laboratory evidence from sports betting

Reference:

Vandenbruaene Jonas, De Ceuster Marc, Annaert Jan.- Does time series momentum also exist outside traditional financial markets? Near-laboratory evidence from sports betting

Journal of behavioral and experimental economics - ISSN 2214-8051 - 104(2023), 102014

Full text (Publisher's DOI): https://doi.org/10.1016/J.SOCEC.2023.102014

To cite this reference: https://hdl.handle.net/10067/1955730151162165141

Institutional repository IRUA
---
Does time series momentum also exist outside traditional financial markets? Near-laboratory evidence from sports betting.

The presence of time series momentum in the returns of financial assets puzzles economists. We show that this anomaly is also present in sports betting, a seemingly unrelated market and a near-laboratory setting. We find both a statistically significant and economically meaningful difference between the returns of bets on recent winners compared to recent losers. These differences are not due to rational compensations for variance or skewness, but are in line with underreaction. The bookmakers do not appear to react efficiently to new information.

Keywords: time series momentum, sports betting, underreaction, asset pricing, behavioral finance

JEL classification: G14, G40, Z2

We would like to thank the two anonymous reviewers for their helpful comments and suggestions.
---
In this paper we document the existence of time series momentum in sports betting. We use a data set of hourly pre-game odds of 30 bookmakers on the outcomes of 17380 football (soccer) games played in 50 major football leagues between 2015 and 2016. First, we find evidence of return predictability based on past odds movements via a regression framework. More specifically, we find that outcomes of which the odds have decreased (and thus the probability of the underlying event has increased) generally have higher expected returns compared to outcomes of which the odds have increased (and thus the probability of the underlying event has decreased). Second, we deploy a time series momentum trading strategy which confirms the results from the regression analysis. The average returns of betting on odds which have been decreasing are statistically significantly higher compared to returns on bets with increasing odds. Furthermore, the differences are economically meaningful. For example, betting on home outcomes of which the odds have decreased by at least 10% in the runup to the game outperforms bets of which the odds have increased by at least 10% by 13.83 percentage points. These effects are robust for a battery of different design choices. It appears that bookmakers do not incorporate new information efficiently into their odds.

We argue that these effects cannot be explained by rational risk premia as assets that have become more risky (higher odds, lower probability of the underlying event happening) have a lower return, while assets that have become less risky (lower odds, higher probability of the underlying event happening) enjoy a higher return. Furthermore, the results do not seem driven by a rational skewness compensation either. The explanation most consistent with the empirical observations is a behavioral underreaction model where information is only slowly absorbed into market prices. These results are consistent with earlier work in both experimental asset markets.
---
# (Gillette, Stevens, Watts, & Williams, 1999; Kirchler, 2009; Page & Siemroth, 2021; Stevens & Williams, 2004; Weber & Welfens, 2007) and in empirical work on the cross-section of expected stock returns (Abarbanell & Bernard, 1992; Bernard & Thomas, 1989; Chan, Jegadeesh, & Lakonishok, 1996; Hui & Yeung, 2013).

The contribution of this paper is twofold. First, it adds to the sports betting literature by providing evidence of time series momentum in pre-game bookmaker odds. Second, it contributes to the broader asset pricing literature by providing an indication that time series momentum in financial markets could be driven at least partly by behavioral forces and by underreaction more specifically. The sports betting setting is an interesting empirical lab as terminal values of the assets, i.e. the outcomes of the bets, are observable and independent of bettor behavior (Moskowitz, 2021; Thaler & Ziemba, 1988). Furthermore, as we know the terminal values of the assets, we can distinguish between underreaction (which is characterized by a continued drift) and overreaction (which is characterized by a reversal). Generalizing results obtained in sports betting to capital markets should be done cautiously. However, similar patterns in seemingly unconnected markets could expose fundamental symmetries. A common criticism to behavioral theories is that “allowing for irrationality opens a Pandora’s box of ad hoc stories that will have little out-of-sample predictive power” (Daniel, Hirshleifer, & Subrahmanyam, 1998, p. 1841). A general behavioral theory should be able to explain cognitive glitches irrespective of whether sports bets or capital market securities are involved.

The rest of this paper is structured as follows. Section 1 introduces the context. Section 2 discusses the institutional setting and the dataset. In section 3, we carry out
---
# Context

Whether past returns predict future returns is a question that is probably older than financial economics itself. Early empirical work showed that the dependence of returns on their own past is “either extremely slight or else non-existent” (Fama, 1965, p. 90). Historical returns were believed to contain no information that could be profitably leveraged in a trading strategy as expected in an informationally efficient market. Since seminal work by Jegadeesh and Titman (1993) and more recently by Moskowitz, Ooi, and Pedersen (2012), interest in both cross-sectional and time-series momentum respectively has been rejuvenated. Fundamentally, both types of momentum refer to the observation that historical returns predict future returns. Momentum is typically cross-sectional, meaning that assets which have been outperforming relative to other assets keep on outperforming in the future. Time series momentum or trend momentum directly tries to predict future returns of an individual asset based on its past returns.

Significant cross-sectional and time series momentum premia have been found in major asset classes including stocks, government bonds, corporate bonds, currencies and commodities (Asness, Moskowitz, & Pedersen, 2013; Georgopoulou & Wang, 2016; Jostova, Nikolova, Philipov, & Stahel, 2013; Moskowitz et al., 2012). Momentum is also remarkably persistent over time as it shows up in long run historical data sets (Annaert & Mensah, 2014; Geczy & Samonov, 2016; Goetzmann & Huang, 2018). This meaningful return predictability based on past returns is awkward as it seems to imply that markets are not even weakly efficient.

# Return Predictability Tests

In section 4 time series momentum strategies are tested while section 5 discusses the results and section 6 concludes.
---
Despite truckloads of empirical evidence on the existence of momentum, its origin puzzles financial economists and is still heavily debated. Multiple, sometimes mutually exclusive, explanations for this “premier anomaly” (Fama & French, 2008, p. 1653) have been proposed. A first possibility is that momentum simply does not exist in the real world. Momentum could for example be the result of data mining (Jegadeesh & Titman, 2001), but this is very unlikely given the magnitude of the empirical evidence. Another possibility is that momentum profits exist on paper, but not in practice because of transaction costs (Lesmond, Schill, & Zhou, 2004; Patton & Weller, 2020).

The most common explanations however are either risk related or behavioral. A risk premium for assets that have been performing well would fit the standard asset pricing paradigm if good past performance increases an asset’s risk, but this is counterintuitive (Lewellen, 2002) although some rational stories have been proposed (Galariotis, 2013; Johnson, 2002; Li, 2018). Another explanation fitting the rational paradigm is that the momentum premium is a compensation for systematic skewness (Harvey & Siddique, 2000). Behavioralists argue that agents do not properly react to new information and that under- and/or overreaction to news could explain momentum (e.g. Barberis, Shleifer, and Vishny (1998), Daniel et al. (1998), Frazzini (2006)).

Empirically testing these theories is generally hindered by the joint hypothesis problem (Fama, 1991). If prices deviate from theoretical models, it is not clear whether the prices or the models are wrong, or both. To make matters worse, both risk and behavioral forces could be at work at the same time making it harder to distinguish.
---
between different alternatives. Betting markets could provide a way out of this gridlock (Moskowitz, 2021; Thaler & Ziemba, 1988). Betting markets have traditionally received substantial attention by economists because they can be regarded as “simple financial markets” (Sauer, 1998, p. 2021)These markets are interesting asset pricing labs for several reasons (Vandenbruaene, De Ceuster, & Annaert, 2022).

First, uncertainty is quickly resolved exogenously from bettor behavior and beliefs. Sports bets are typically short-term contracts with maturities of days to just minutes after which the terminal values of the assets are revealed. This allows researchers to detect systematic mispricing and makes betting markets “better suited for testing market efficiency and rationality” (Thaler & Ziemba, 1988, p. 162) compared to traditional financial markets. Furthermore, the short maturity of the contracts can enhance efficiency as agents can quickly get feedback on their decisions which experimental research shows is important to eliminate mispricing (Forsythe, Palfrey, & Plott, 1982; Haruvy, Lahav, & Noussair, 2007).

Second, bets take place in a vacuum, i.e. the payoffs are arguably uncorrelated with aggregate risks that drive the returns of traditional financial assets. This lack of correlation between the payoffs of bets and marginal utility means that the classic risk factors are not applicable to the pricing of sports bets (Moskowitz, 2021).

Third, as betting markets are real markets where real money is at risk, external validity concerns that tend to plague experimental results are alleviated. Moreover, the size of the available data, both cross-sectionally and in the time series, is multiple orders of magnitude larger than would be economically feasible in an experimental setting.
---
As a result of these useful research characteristics, a sizable literature on the efficiency of sports betting markets has been developed.

The empirical work in sports betting dates back to Griffith (1949) who tried to uncover psychological biases by comparing market-implied probabilities in odds with their empirical counterparts. Since then, many researchers have studied the efficiency of betting markets, either via a regression framework to assess whether some variables are significantly correlated with betting returns or via a trading strategy that directly tests whether exploitable inefficiencies exist (Berkowitz, Depken II, & Gandar, 2015; Gray & Gray, 1997; Pankoff, 1968; Woodland & Woodland, 1994). Although individual papers sometimes find profitable strategies, the literature as a whole is mainly in line with market efficiency (Vandenbruaene et al., 2022).

An interesting example for our setting is Croxson and Reade (2014). Using data from betting exchange Betfair, they document that in-game odds move quickly and fully to their efficient levels when a goal is scored during a football game. Similarly, Gauriot and Page (2020) also use data from Betfair and find that although prices often update quickly and efficiently, underreaction can occur when information shocks are large. Momentum strategies in sports betting have been tested previously (for an overview see Vandenbruaene et al. (2022)). However, almost all strategies that have been proposed take past game performance as the trading signal. For example, authors such as Vergin and Scriabin (1978), Tryfos, Casey, Cook, Leger, and Pylypiak (1984), Gandar, Zuber, O'Brien, and Russo (1988) or Vergin (2001) test whether betting on teams that beat their opponents by the largest amount in the last weeks can result in a profitable trading.
---
# Strategy

Such strategies are somewhat analogous to earnings momentum strategies in the traditional empirical work in finance and almost never significantly profitable.

Much less attention has been given to time series momentum strategies that take the evolution of the prices (the odds in a betting context) in the run-up to the game as the trading signal. There are a few notable exceptions that use the evolution between the first odds (opening odds) and the last odds before the game starts (closing odds), but none of them evaluates the full time series of pre-game odds which is the focus of this paper and which much more closely resembles the time series momentum tests carried out with traditional financial assets.

# Setting, Data & Descriptive Statistics

Contemporary European football betting is mainly organized via fixed-odds betting. This means that bookmakers offer odds for game outcomes on which gamblers can bet. An important characteristic of this microstructure is that the potential payouts are fixed and known when a bet is made, which is not the case in parimutuel betting popular in horse racing. This does not mean the odds cannot change over time, it just means that when a gambler chooses to place a bet, the odds at that time are locked in and known by the gambler. In this paper, we use the decimal/European odds convention. These decimal odds represent the payout on a winning unit bet. For example, a gambler betting 1 on the home team when the home team odds are 1.66 gets a payoff of 1.66 when the home team wins (i.e. a return of 66%) and a payoff of 0 when the home team does not win. Note that odds are inversely related to outcome probabilities: high (low) odds reflect a low (high) probability event.
---
# More formally, let 𝑜!"#$ be the decimal odds for outcome 𝑖, set by bookmaker 𝑗, for game 𝑚 at time 𝑡 where 𝑖 = 1 refers to a home win, 𝑖 = 2 refers to a draw and 𝑖 = 3 refers to an away win. The return on a home win bet 𝑟%"#$&% is given as follows:

|𝑟%"#$&%|Calculation|
|---|---|
|(𝑜%"#$ − 1)|if home goals > away goals ("home win")|
|-100%|if home goals = away goals ("draw")|
|-100%|if home goals < away goals ("away win")|

The returns on draw and away win bets are analogous.

Sports bets can thus be regarded as European binary options where the underlying is the outcome of a game. A home bet is in the money whenever the number of home goals is strictly larger than the number of away goals. Also note that the inverse odds are essentially state prices in the Arrow and Debreu (1954) framework.

To make their business profitable, bookmakers charge a transaction cost for their services. This transaction cost is implicitly embedded into the odds, i.e. bookmakers skew the odds into their favor by setting them lower than they would be if the bets were fair. The property that transaction costs are directly embedded into the prices makes life easy for us as the returns on bets are already the post-transaction cost returns. These transaction costs should result in a positive expected return for the bookmaker and a negative expected return for the gambler.

Early literature usually assumed that bookmakers are merely balancing their books, such that they lock in a profit independent of the outcome of the game (see for example (Woodland & Woodland, 1991)). If the books are perfectly balanced, the winners can be paid by the losers while the bookmaker pockets a small transaction cost. In more recent work, Grant, Oikonomidis, Bruce, and Johnson (2018) classify
---
Bookmakers with this business model as “book-balancing bookmakers” (BBBs).

Examples of BBBs in our sample include SBOBET, 188Bet and Pinnacle.

In seminal work however, Levitt (2004) argued that bookmakers can increase their profits if they exploit the preferences of their clients, i.e. making sure there are more losers than winners. Grant et al. (2018) classify bookmakers with this business model as “position-taking bookmakers” (PTBs). In contrast with book-balancing bookmakers who live off volume, position-taking bookmakers can achieve higher margins if they actively manage their client portfolio. As they take positions against their customers, they try to reduce their exposure to sophisticated gamblers by monitoring the behavior of their clients and limiting their action radius if they win too much (Franck, Verbeek, & Nüesch, 2013). Examples of PTBs in our sample include Ladbrokes, William Hill and Bet 365.

As mentioned earlier, the data set consists of time series of pre-game odds on 17380 football games. The data set is collected by Kaunitz, Zhong, and Kreiner (2017) who use it to construct a betting strategy that exploits pricing differences between different bookmakers. A real-world implementation of their strategy yielded a return of 8.5%. However, they discontinued their strategy in a response to discriminatory practices of bookmakers to which we will come back later in the paper.

For each game in the data set, the home win, draw and away win odds of 30 bookmakers are recorded every hour. In essence, we thus observe evaluations of the outcome probabilities of the games of 30 agents (bookmakers). Note that these evaluations are fully transparent as both bookmakers and gamblers can monitor the odds.
---
# Time Series Analysis of Betting Odds in Football

Online betting odds are constantly changing in real-time, creating a competitive market. Each time series of odds begins 72 hours before a game with the initial quoted odds and ends 1 hour before the game with the final quoted odds. Bookmakers can adjust their odds based on new information such as team line-ups, player injuries, or significant betting volumes indicating potential insider information.

For example, Figure 1 illustrates the time series of pre-game home win odds provided by bookmaker Pinnacle for a match between Liverpool and Manchester City on 2 March 2016. The odds shifted from 2.57 to 2.79 in the 72 hours leading up to the game.

# Fundamental Value of Bets

The fundamental value of bets fluctuates over time based on the relative strengths and weaknesses of the teams involved, rather than any experimental design. This differs from research on under- and overreaction in experimental asset markets, where asset values typically decline deterministically over time, as seen in the model by Smith, Suchanek, and Williams (1988). An exception to this is the study by Stöckl, Huber, and Kirchler (2015), where fundamental values fluctuate randomly over time. Their findings align with the results discussed in sections 3 and 4, showing that assets are overvalued or undervalued based on the direction of fundamental value changes.

# Football Leagues Data Set

The analysis covers games from 50 different football leagues between September 2015 and November 2016. Table 1 presents the list of leagues included in the data set along with game-related summary statistics.

Football Leagues
Summary Statistics

1. Premier League
NO_CONTENT_HERE
---
because of some missing values, but mainly because of differences in league organization like the number of teams in the league and the timing of the games. On average, we have just under 350 games per league. It is interesting to point to the well-documented home field advantage. In all but one of the leagues, the probability of a home win is larger than the probability of an away win. On average home wins occur 50% more often than away wins. Lastly, the mean number of goals per match is 2.62.

To make the time series in our sample more manageable, we summarize the odds of the 30 individual bookmakers into market odds 𝑜̅!#$ which could be interpreted as the market price of the respective outcome7. These market odds are the trimmed cross-sectional average odds for outcome 𝑖 over all bookmakers 𝑗 for match 𝑚 at time 𝑡.We remove the three bookmakers with the highest and lowest odds to prevent that our results are driven by extreme values that are potentially pricing errors. (Analyses with different trim choices are similar.)

Table 2 reports summary statistics of the market odds 𝑜̅!#$. We have approximately three million market odds observations distributed uniformly across the three outcome categories (home win, draw, away win). Note that the mean and median home odds (2.46 and 2.15) are significantly lower than the corresponding away odds (3.98 and 3.29), which reflects the strong home field advantage. Furthermore, it is worth pointing to the standard deviations and the extrema of the different odds categories. Draw market odds live in the smallest interval while away win market odds vary most wildly.
---
# Table 3

Table 3 provides summary statistics of both absolute and percentage hourly market odds changes, the latter will be our variable of interest in the next section. First, notice that on average market odds do not change. The mean and median values are all very close to zero, both for absolute and percentage changes. However, from time to time very dramatic odds changes occur between two consecutive odds, as indicated by the extreme values on the last two rows of the two panels in Table 3. Double digit percentage increases and decreases in the market odds occur for all outcome categories.

# Figure 2

The dynamism in pre-game odds is more pronounced when we consider the total change between the opening odds and the closing odds as depicted in figure 2. From these figures, we learn that bookmakers do not systematically revise their odds in either direction in the runup to a game. This could be an indication that without the arrival of new information, the odds 72 hours before the start are equally indicative of the outcome of the game as the odds just an hour before the game as would be expected in an efficient market.

However, notice that remarkable changes in odds, both in relative and absolute terms, occur. For percentage changes, we witness extrema as low as -71.78% and as high as 248.74%, in absolute terms, changes in market odds of -14.33 to 22.56 are observed which are clearly economically meaningful (remember that these market odds are already trimmed to minimize pricing errors in the data). As shown in figure 3, in absolute value terms, the odds tend to change the most in the hours just before the game.
---
3. Return predictability

In an efficient betting market, information is instantaneously and adequately incorporated into the pre-game odds. In such a market, past price movements do not predict future returns. To test for return predictability, we estimate the following equation:

𝑟!#$ = (' ) 𝛽'∆𝑜$(%̅!#$(' ) 𝛽#𝐿𝑒 # !#$ (1)

where !#$ is the return achieved by betting on the market odds for outcome in match at time . We will refer to the period between and the end of the game as the investment window. $(% !#$(' represents the relative change in market odds between and referred to as the information window, for outcome in match with . We end the information window at instead of to avoid information spillovers9. We control for the league the game is played in as bookmakers could charge different transaction costs in leagues that receive a lot of attention like the English Premier League versus more humble competitions like the Vysshaya Liga in Belarus.

In an efficient market, we expect ' to be indistinguishable from zero.

Hypothesis 1a: ' : Efficient sports betting market.
---
# Alternatively, bookmakers do not incorporate information efficiently into their odds.

In this case, odds change too little or too much depending on whether bookmakers under- or overreact. Because terminal values of sports bets are observable (we know the outcome of the game), we can easily distinguish between under- and overreaction.

Suppose important information 24 hours before the game induces the home odds to decline, as depicted in panel A of figure 4. This means the probability of a home win has gone up. In an efficient market, the odds move from 𝑜) to 𝑜*. If bookmakers underreact to the news, the odds will not move down by the full extent but end up at 𝑜*%. These odds are a good deal for gamblers as they are higher than they should be, these odds are too high given the outcome probability. If bookmakers overreact to news, the odds will move to 𝑜*+. These odds are not a good deal for gamblers as they are lower than they should be given the outcome probability. Analogously, in panel B of figure 4 information 24 hours before the game induces the home odds to increase. This means that the probability of a home win has decreased. In an efficient market the home odds move from 𝑜) to 𝑜*. If bookmakers underreact, the odds will not move up by the full extent and end up at 𝑜*%. These odds are a bad deal as they are lower than they should be. If bookmakers overreact to news, the odds will move to 𝑜*+. These odds are a good deal as they are higher than they should be.

# We can conclude that if 𝛽' > 0 in equation (1), a past increase (decrease) of the odds increases (decreases) subsequent returns. This happens when bookmakers overreact. If 𝛽' < 0 in equation (1), a past increase (decrease) in the odds decreases (increases) subsequent returns. This happens when bookmakers underreact. We summarize this in the following hypotheses.
---
# Hypothesis 1b: 𝛽' > 0

Inefficient sports betting market where agents overreact

</hypothesis>

# Hypothesis 1c: 𝛽' < 0

Inefficient sports betting market where agents underreact

</hypothesis>

To avoid data mining issues, we run regression (1) for all possible information and investment windows, i.e. all 𝑡 − to intervals that are feasible. By doing this we get a full overview of the possible combinations of information and investment windows and avoid cherry-picking values for 𝑡 and that work by accident. Note that we have 72 hourly odds observations per game, resulting in 2556 unique information windows. As we require at least 1 hour between the end of the information window and the start of the investment window, 71 information windows become uninvestable, resulting in 2485 regressions. We estimate heteroskedasticity and autocorrelation consistent standard errors via the Newey-West procedure10.

**Table 4: Summary of Regression Results**
| |Home Odds|Draw Odds|Away Odds|
|---|---|---|---|
|%|Negative in over 93% of cases|Negative in over 93% of cases|Negative in over 93% of cases|
|Coefficients|Many smaller than -1|Almost 50% smaller than -1|Many smaller than -1|
|Statistical Significance|15% to 42% have t-stats smaller than -1.96|15% to 42% have t-stats smaller than -1.96|15% to 42% have t-stats smaller than -1.96|
| |No positive t-stats larger than 1.96|No positive t-stats larger than 1.96|No positive t-stats larger than 1.96|
---
An objection that can be made is that we run many regressions and that our regressions are clearly not independent. In terms of statistical significance, Chen (2020) shows that for an arbitrary correlation structure the expected number of rejections of the null is given by:where  ! are the t-statistics of   tests,    is a critical value and   a standard normal random variable. For the common critical value of                                 , we would only expect rejections of the null per odds category. In contrast, we respectively find            ,         and         such results. The results are even more extreme when we would consider the observed number of t-stats below -3 or -4 compared to what we would expect. Another way to place the results in context is by applying the Bonferroni correction for multiple hypothesis tests. In this case, we scale the significance level   by the number of tests:  ./01233/0!   54. As we run regressions, we evaluate the results at  ./01233/0!                             (6, which corresponds to a t-stat of           . Given that we observe t-stats smaller than this extreme value for both home and away odds, these results are statistically significant even when we take the large number of tests into account. Similar results are obtained via other popular multiple hypotheses tests like the Holm correction or the Benjamini, Hochberg and Yekutieli (BHY) correction. Notice furthermore that the Bonferroni correction is especially harsh in our context as many of our t-stats are highly correlated. For example, suppose we run two regressions of which the underlying data is almost perfectly
---
# correlated. This would result in  ./01233/0!   7.76which is clearly too extreme as we+

essentially run the same regression twice. As a result, the Bonferroni hurdle rate we

apply is an extreme upper bound to test statistical significance in our context.

In summary, the results make a case for significant return predictability driven by

underreaction, or in other words:

|!#$|$(%!#$('|!#$|$(%|
|---|---|---|---|
| | |!#$('|(3)|

Note that these results are hard to reconcile with a rational risk story. The returns

increase on bets for which the odds have decreased, i.e. which became less risky. For

bets that have become riskier, the returns go down. This is the opposite of what one

would expect in a framework where predictable patterns in returns must be induced by

risk factors.

As a robustness exercise we follow Moskowitz et al. (2012) and estimate a

variation to regression (1) where we check whether just the sign of the past returns

contains predictive information.

!#$
'
'
$(%
!#$('
#
!#$
(4)

The results of regression (4) are displayed in table 5 and are in line with the earlier

discussion.

A valid remark that could be made is that the aggregation of odds into market

odds as described above can create an artificial momentum effect. Indeed, if some
---
bookmakers are later to update their odds than others, average odds could seem to underreact to information while none of the individual bookmakers underreact. We can distinguish between bookmakers underreaction to information (i.e. not fully updating their odds to an efficient level) and just being late (i.e. updating their odds to the efficient level, but with a lag compared to others) by rerunning the analysis for each bookmaker individually. If the momentum effect we notice at a market level is driven by the underreaction of individual bookmakers, we must see a predictability pattern in the odds of the individual bookmakers as well.

Table 6
shows the relative frequencies of the coefficients and t-statistics of the regressions on the individual bookmaker level aggregated over all bookmakers. Notice that the evidence is weaker but it points in the same direction: much more (less) t-statistics &lt; -1.96 (&gt;1.96) than would be expected under the null and a large majority of coefficients smaller than 0.
Table 7
shows the percentage of t-statistics &lt; -1.96 of the 𝛽' coefficients per bookmaker. It is interesting to see that not all bookmakers underreact to the same extent. Eleven of the bookmakers in the sample have values that do not deviate from what we would expect under a null of market efficiency. Furthermore, it is hard to point to a variable that differentiates the underreacting bookmakers from the rest. For example, both position-taking bookmakers (PTBs) and book-balancing bookmakers (BBBs) appear in the category of bookmakers that most heavily underreact. Moreover, both traditional bookmakers like Ladbrokes (which dates back to 1886) as well as online disrupters like Interwetten (founded in 1990) appear to underreact.
---
# Momentum portfolios

In the previous section we put forward evidence that bookmakers underreact to new information which is in line with earlier research in experimental asset markets (e.g. Kirchler (2009); Weber and Welfens (2007)). In this section, we move beyond and analyze whether the documented return predictability can be monetized in a real betting market via a time series momentum strategy. To do so, we make two portfolios, one for “winners” and one for “losers”. We define winners as the bets of which the odds have decreased i.e. the probabilities of the underlying events have increased. Losers are defined as the bets of which the odds have increased i.e. the probabilities of the underlying events have decreased. In an efficient market betting on winners will yield the same return as betting on losers as all bets are priced correctly. However, if bookmakers underreact, the returns on winners are expected to be higher than the returns on losers as prices do not respond swiftly but continue to drift towards their efficient levels.

In figure 5, we show in blue the mean return across all games for every hour and every odds type for all observations. That is, every blue dot is:

9
#:% !#$

for its respective value of and . Similarly, the mean returns for the observations of which the odds decreased between and are shown in red. That is, every red dot is:

9
$(%
#:% !#$ !#$(+

for its respective value of and . Lastly, the mean returns for the observations of which the odds increased between and are shown in green. That is, every green dot is:

20
---
for its respective value of   and  . We compute the returns at   instead of                              to prevent information spillovers. The group means are shown in black in figure 5 together with their 99% confidence intervals. Notice that the mean returns of the observations with decreasing odds are systematically higher than the unconditional means, which are again higher than the means of the observations with increasing odds. Furthermore, the differences between the means of the increasing and decreasing odds are statistically significant for home odds, draw odds and away odds (the t-statistics are respectively -8.72, -3.29 and -7.34). These results are consistent with the regression analysis from the previous section and again point in the direction of underreaction.

To further investigate whether the differences are exploitable, we set up the following trading strategy. We compute odds changes $(% !#$(' for all feasible values for   and   and generate a trading signal whenever $(% !#$(' for the first time in the respective time series i.e. at the smallest possible value for   where the critical value condition is met. If the condition is met, we bet at the most favorable odds offered by the 30 bookmakers in the sample at time  . This setup eliminates information spillovers in both the information window and investment window and is implementable in real time. Furthermore, the market odds are not directly tradable, so we only use these odds to generate a trading signal and trade at odds offered directly in the market.
---
|Home Odds|Draw Odds|Away Odds| |
|---|---|---|---|
|5|10|15|20|

Summary statistics of the momentum strategy are shown in table 8. We consider 4 different values for (5, 10, 15 & 20) for home odds, draw odds and away odds, resulting in 12 different “momentum portfolios”. First, note again that in every case, the mean returns on bets of which odds have decreased are larger than the mean returns on bets of which the odds which have increased. This is consistent with our previous analyses and with underreaction. This difference is often substantial and statistically significant. For example, bets of which the odds have decreased by at least 10% in the runup to a game outperform bets of which the odds have increased by at least 10% by 13.83 percentage points (t-stat of 3.57). Moreover, this difference increases almost monotonically when the critical values go up. Second, it is striking that the returns of many implementations are positive after transaction costs which indicates that the inefficiency could be profitably exploited. For example, the simple strategy of making a unit bet every time the home odds move down by 20% has an expected return of 11.09%. For draw odds the results are even more extreme: betting when draw odds move down by more than 20% has an expected return of 17.93%. However, keep in mind that this strategy only bets on 82 games out of 17380 games in the sample.

An objection that could be made is that the differences in returns are rational risk compensations. In this scenario, strategies that are riskier should yield higher returns. However, this explanation seems unlikely as the variances of the returns of bets on decreasing odds are lower than those of the increasing odds in 8 out of 12 strategies and the differences are often statistically significant. Another argument that could be made
---
The differences in returns are often attributed to a skewness preference of gamblers. Research on stock markets suggests that investors tend to favor stocks with positive skewness (lottery-like characteristics) and are willing to pay more for them (Annaert, De Ceuster, & Verstegen, 2013). However, our data does not support this explanation, as the skewness values of the returns from different portfolios are rarely statistically different from each other.

We conducted two additional robustness analyses. First, we implemented the strategy by removing the three highest odds and placing bets at the 4th best odds instead of the best odds. The results are presented in Table 9. While 6 implementations were profitable when betting at the best odds, only 2 implementations remained profitable when betting at worse odds. Second, we repeated the analysis by placing bets at median odds (Table 10). This time, none of the implementations showed a positive mean return. However, the mean returns of bets at decreasing odds consistently outperformed bets at increasing odds. The rational explanations, such as compensation for variance of skewness, were once again not supported.

**Table 9**
|We run the strategy|Profitable at best odds|Profitable at worse odds|
|---|---|---|
|6 implementations|Yes|No|
|2 implementations|Yes|Yes|

**Table 10**
|Mean return|Bets at median odds|
|---|---|
|Not positive|All implementations|

In a final analysis, we repeated the momentum trading strategy but focused on the odds time series of individual bookmakers to generate trading signals and select corresponding odds for bets. Unlike previous analyses, we no longer used market odds to identify trading opportunities but instead examined changes in the time series of individual bookmakers. Additionally, bets were placed based on these individual bookmakers' odds.
---
# Results

The results are shown in table 11. In 11 of the 12 strategy implementations, the returns of “winners” are higher than those of “losers” and these differences are often highly statistically significant. This is in line with the previous analyses. However, none of the implementations are profitable. In appendix, we find similar results when we repeat the analysis with an information window ending at 𝑡 − 2 and 𝑡 − 3 respectively (i.e. a gap of 2 and 3 hours between the end of the information period and the execution of the bet).

# Discussion

We document a strong time series momentum effect in betting markets that appears to be driven by underreaction of bookmakers. Although underreaction is indeed a prevalent behavioral fallacy in the literature, many behavioral models involve both underreaction and overreaction (e.g. Barberis et al. (1998) or Daniel et al. (1998)).

There are a number of reasons why we could fail to document overreaction in our setting. First, underreaction simply appears to be a more persistent anomaly than overreaction. For example, Lin and Rassenti (2012) find that underreaction drifts substantially outnumber overreaction reversals in an experimental asset market. Similarly, Stevens and Williams (2004) find that underreaction is a common behavioral glitch and document that agents underreact to both negative and positive information in a controlled experimental setting. In their study, 24.8% of subjects underreacted to information more than 50% of the time while 0% of subjects overreacted more than 50% of the time, leading them to conclude that they do not find evidence of systematic.
---
overreaction. This is consistent with Weber and Welfens (2007) who also find evidence of stock price underreaction but not of overreaction in an experimental setting.

Second, many behavioral models consist of short-term underreaction followed by longer-term overreaction. As our time series only contain 72 hourly observations, they might be too short to pick up reversal patterns. In the seminal work by De Bondt and Thaler (1985) for example, the observed overreaction effect is strongest between 3 and 5 years after portfolio formation. Such a timeframe is clearly of a different order of magnitude than we have in our data (and that of previous experimental work). In related work, Moskowitz (2021) finds evidence consistent with overreaction in a US sample of sports bets. However, his momentum signals are related to the past performance of teams up to the last 8 games which is again a much longer timeframe than the one we consider in this study.

It is worth hypothesizing why we document underreaction and related work like Croxson and Reade (2014) finds that odds generally update efficiency. A first reason might be the market microstructure. Croxson and Reade (2014) use data from betting exchange Betfair, while we rely on bookmaker odds. Betting exchanges where prices are directly determined by supply and demand have been shown to produce more accurate odds compared to bookmakers (Franck, Verbeek, & Nüesch, 2010).

A second reason might be the salience and transparency of the information. Croxson and Reade (2014) study the reaction of in-game odds to goals being scored, which are very and transparent events and broadcasted worldwide. The information that moves the odds in the 72 hours leading up to the game is much less transparent (for 25
---
example rumors on players being injured). A more extreme version of this argument is potential insider trading or match fixing. Under this hypothesis, it is not the bookmakers who underreact to information, but information itself reaching the market only gradually. This could be the case when there are insiders with private information who gradually build up their stakes in order not to move market prices too much with their transactions. Although the topic of potential insider trading has a tradition in the betting literature (see for example Crafts (1985), Schnytzer and Shilony (1995) or Shin (1991)) these studies mostly focus on horse racing. Football is due to its nature as a team sport and the media scrutiny it receives probably less susceptible to insider trading or match fixing which could make it less likely that it is the main driver of the ubiquitous momentum effect that we document.

To end the discussion, it should be noted that although we document some strategies that appear profitable, it is not sure whether they can also be exploited. Franck et al. (2013) and Kaunitz et al. (2017) for example document discrimination of bookmakers against successful clients. The maximum stakes of gamblers who win consistently can be reduced or their accounts can be simply suspended. This limits the potential profitability of running a momentum betting strategy.

# 6. Conclusion

Does time series momentum also exist outside traditional financial markets? If we look at pre-game sports bet odds, the answer is yes. The expected returns of “winners” are economically and statistically significantly higher than those of “losers”. This result is robust to a battery of different design choices. Moreover, some long only portfolios are profitable after transaction costs. Furthermore, we add to the growing evidence that agents systematically underreact to new information. The momentum
---
patterns that we document are consistent with a prolonged drift towards efficient asset values.

Can we further generalize our results? It is obvious that betting markets are in many respects very different than traditional financial markets. However, the fact that we document a similar momentum pattern in a seemingly unrelated environment can reveal a fundamental human behavioral glitch. Especially because it is consistent with earlier results in experimental asset markets.
---
# Appendix

In table 12, we show the results of regression (1) where the standard errors are clustered by league. The results are similar to those in the main text.

In the main text, we defined the information window as ∆𝑜̅!#$('$(% , representing the relative change in market odds between 𝑡 − and with . As a robustness exercise, we change the gap between the information window and investment window from 1 to 2 hours: $(+ !#$(' with . The results are shown in table 13 and are similar to those discussed in the main text.

Table 14 and 15 show the performance of the momentum strategy that bets on the time series of odds of individual bookmakers but now with lags of 2 and 3 hours respectively between the end of the information window and the execution of the bet. The results are similar to those discussed in the main text.

**Table 13**

**Table 14**

**Table 15**
---
Notes

1. Many models are developed for momentum in the cross-sectional sense. However, they also pertain to individual assets and thus are relevant for time series momentum as well (Moskowitz et al., 2012).

2. It is worth noting that parallel to the establishment of the empirical literature on sports bets, an experimental literature that uses the betting microstructures (like parimutuel betting) has been developed. See Noussair and Tucker (2013) for an overview.

3. See for example Baryla Jr, Borghesi, Dare, and Dennis (2007), Crafts (1985), Gandar et al. (1988) or Shank (2018).

4. The data are collected by Kaunitz et al. (2017) and are available on Kaggle: https://www.kaggle.com/austro/beat-the-bookie-worldwide-football-dataset#odds_series_b.csv.gz.

5. These bookmakers are: Interwetten, bwin, bet-at-home, Unibet, Expekt, 10Bet, William Hill, bet365, Pinnacle Sports, DOXXbet, Betsafe, Betway, 888sport, Ladbrokes, Betclic, Sportingbet, myBet, Betsson, 188BET, Jetbull, Paddy Power, Tipico, Coral, SBOBET, BetVictor, 12BET, Titanbet, youwin, ComeOn, , Betfair Sports.

6. Notice that the data set of Kaunitz et al. (2017) contains more than 50 leagues. We opted to select 50 major leagues based on the UEFA and FIFA rankings as liquidity and media coverage typically decreases in lower leagues. We are confident that the proposed sample is a good reflection of the global football sports betting market. Furthermore, missing values can occur as for example some bookmakers are quicker to offer odds on games than others who only start offering odds closer to the start of the game. Missing values are not systematically treated by removing all rows that contain a missing value or replace them by for example the mean. When an analysis is carried out, for example the momentum trading strategy, only the odds that are available at the required moment are taken into account, the missing values are ignored.

7. These market odds are not directly tradable. In our trading strategies, we will use these market odds as an information signal but make bets on odds of individual bookmakers to make sure the strategies are implementable.

8. Figure 3 is based on away market odds. The dynamics in home and draw market odds are almost identical.

9. For robustness, we repeat the analysis with an information window ending at t-2. The results are similar and shown in appendix.

10. For the lag parameter, we use 𝑇!/# = 72!/# ≈ 3. The results for other standard error estimation choices (e.g. clustering by league) are similar as shown in appendix.
---
Under the assumption that the marginal distribution of t-statistics is standard normal under the null.

Disclosure statement: The authors know of no other conflicts of interests related to this manuscript to disclose.

Data availability statement: The data that support the findings of this study are openly available in Kaggle at https://www.kaggle.com/datasets/austro/beat-the-bookie-worldwide-football-dataset
---
# References

Abarbanell, J. S., & Bernard, V. L. (1992). Tests of analysts' overreaction/underreaction to earnings information as an explanation for anomalous stock price behavior. The Journal of Finance, 47(3), 1181-1207. doi:https://doi.org/10.1111/j.1540-6261.1992.tb04010.xAnnaert, J., De Ceuster, M., & Verstegen, K. (2013). Are extreme returns priced in the stock market? European evidence. Journal of Banking & Finance, 37(9), 3401-3411. doi:https://doi.org/10.1016/j.jbankfin.2013.05.015Annaert, J., & Mensah, L. (2014). Cross-sectional predictability of stock returns, evidence from the 19th century Brussels Stock Exchange (1873–1914). Explorations in Economic History, 52, 22-43. doi:https://doi.org/10.1016/j.eeh.2013.10.002Arrow, K. J., & Debreu, G. (1954). Existence of an equilibrium for a competitive economy. Econometrica: Journal of the Econometric Society, 265-290. doi:https://doi.org/1907353Asness, C. S., Moskowitz, T. J., & Pedersen, L. H. (2013). Value and momentum everywhere. The Journal of Finance, 68(3), 929-985. doi:https://doi.org/10.1111/jofi.12021Barberis, N., Shleifer, A., & Vishny, R. (1998). A model of investor sentiment. Journal of Financial Economics, 49(3), 307-343. doi:https://doi.org/10.1016/S0304-405X(98)00027-0Baryla Jr, E. A., Borghesi, R. A., Dare, W. H., & Dennis, S. A. (2007). Learning, price formation and the early season bias in the NBA. Finance Research Letters, 4(3), 155-164. doi:https://doi.org/10.1016/j.frl.2007.04.002Berkowitz, J. P., Depken II, C. A., & Gandar, J. M. (2015). Information and accuracy in pricing: Evidence from the NCAA men׳s basketball betting market. Journal of Financial Markets, 25(C), 16-32. doi:https://doi.org/10.1016/j.finmar.2015.06.003Bernard, V. L., & Thomas, J. K. (1989). Post-earnings-announcement drift: delayed price response or risk premium? Journal of Accounting research, 27, 1-36. doi:https://doi.org/2491062Chan, L. K., Jegadeesh, N., & Lakonishok, J. (1996). Momentum strategies. The Journal of Finance, 51(5), 1681-1713. doi:https://doi.org/10.1111/j.1540-6261.1996.tb05222.xChen, A. Y. (2020). The Limits of p-Hacking: Some Thought Experiments. The Journal of Finance. doi:https://doi.org/10.1111/jofi.13036Crafts, N. F. (1985). Some evidence of insider knowledge in horse race betting in Britain. Economica, 52(207), 295-304. doi:https://doi.org/10.2307/2553853Croxson, K., & Reade, J. (2014). Information and Efficiency: Goal Arrival in Soccer Betting. The Economic Journal, 124(575), 62-91. doi:https://doi.org/10.1111/ecoj.12033Daniel, K., Hirshleifer, D., & Subrahmanyam, A. (1998). Investor Psychology and Security Market Under- and Overreactions. The Journal of Finance, 53(6), 1839-1885. doi:10.1111/0022-1082.00077De Bondt, F. M. W., & Thaler, R. (1985). Does the Stock Market Overreact? The Journal of Finance, 40(3), 793-805. doi:https://doi.org/10.1111/j.1540-6261.1985.tb05004.xFama, E. F. (1965). The Behavior of Stock-Market Prices. The Journal of Business, 38(1), 34-105. doi:https://doi.org/10.1086/294743Fama, E. F. (1991). Efficient Capital Markets: II. The Journal of Finance, 46(5), 1575-1617. doi:10.1111/j.1540-6261.1991.tb04636.xFama, E. F., & French, K. R. (2008). Dissecting Anomalies. The Journal of Finance, 63(4), 1653-1678. doi:https://doi.org/10.1111/j.1540-6261.2008.01371.xForsythe, R., Palfrey, T. R., & Plott, C. R. (1982). Asset valuation in an experimental market. Econometrica: Journal of the Econometric Society, 50(3), 537-567. doi:https://doi.org/10.2307/1912600
---
# References

Franck, E., Verbeek, E., & Nüesch, S. (2010). Prediction accuracy of different market structures—bookmakers versus a betting exchange. International Journal of Forecasting, 26(3), 448-459.

Franck, E., Verbeek, E., & Nüesch, S. (2013). Inter-market Arbitrage in Betting. Economica, 80(318), 300-325. doi:https://doi.org/10.1111/ecca.12009

Frazzini, A. (2006). The disposition effect and underreaction to news. The Journal of Finance, 61(4), 2017-2046. doi:https://doi.org/10.1111/j.1540-6261.2006.00896.x

Galariotis, E. (2013). Mesdames et Messieurs, momentum performance is not so abnormal after all! Applied Economics, 45(27), 3871-3879. doi:https://doi.org/10.1080/00036846.2012.730138

Gandar, J. M., Zuber, R. A., O'Brien, T., & Russo, B. (1988). Testing Rationality in the Point Spread Betting Market. The Journal of Finance, 43(4), 995-1008. doi:https://doi.org/10.2307/2328148

Gauriot, R., & Page, L. (2020). How Market Prices React to Information: Evidence from a Natural Experiment. Division of Social Science Working Paper Series. Retrieved from https://nyuad.nyu.edu/content/dam/nyuad/academics/divisions/social-science/working-papers/2020/0058.pdf

Geczy, C. C., & Samonov, M. (2016). Two centuries of price-return momentum. Financial Analysts Journal, 72(5), 32-56. doi:https://doi.org/10.2469/faj.v72.n5.1

Georgopoulou, A., & Wang, J. (2016). The Trend Is Your Friend: Time-Series Momentum Strategies across Equity and Commodity Markets*. Review of Finance, 21(4), 1557-1592. doi:10.1093/rof/rfw048

Gillette, A. B., Stevens, D. E., Watts, S. G., & Williams, A. W. (1999). Price and volume reactions to public information releases: An experimental approach incorporating traders' subjective beliefs. Contemporary Accounting Research, 16(3), 437-479. doi:https://doi.org/10.1111/j.1911-3846.1999.tb00590.x

Goetzmann, W. N., & Huang, S. (2018). Momentum in imperial Russia. Journal of Financial Economics, 130(3), 579-591. doi:https://doi.org/10.1016/j.jfineco.2018.07.008

Grant, A., Oikonomidis, A., Bruce, A. C., & Johnson, J. E. (2018). New entry, strategic diversity and efficiency in soccer betting markets: the creation and suppression of arbitrage opportunities. The European Journal of Finance, 24(18), 1799-1816. doi:https://doi.org/10.1080/1351847X.2018.1443148

Gray, P. K., & Gray, S. F. (1997). Testing Market Efficiency: Evidence From The NFL Sports Betting Market. The Journal of Finance 52(4), 1725-1737. doi:doi:10.1111/j.1540-6261.1997.tb01129.x

Griffith, R. M. (1949). Odds adjustments by American horse-race bettors. The American Journal of Psychology, 62(2), 290-294. doi:https://doi.org/10.2307/1418469

Haruvy, E., Lahav, Y., & Noussair, C. N. (2007). Traders' expectations in asset markets: experimental evidence. American Economic Review, 97(5), 1901-1920. doi:https://doi.org/10.1257/aer.97.5.1901

Harvey, C. R., & Siddique, A. (2000). Conditional skewness in asset pricing tests. The Journal of Finance, 55(3), 1263-1295.

Hui, K. W., & Yeung, P. E. (2013). Underreaction to industry-wide earnings and the post-forecast revision drift. Journal of Accounting research, 51(4), 701-737. doi:https://doi.org/10.1111/1475-679X.12006

Jegadeesh, N., & Titman, S. (1993). Returns to buying winners and selling losers: Implications for stock market efficiency. The Journal of Finance, 48(1), 65-91. doi:https://doi.org/10.1111/j.1540-6261.1993.tb04702.x

Jegadeesh, N., & Titman, S. (2001). Profitability of momentum strategies: An evaluation of alternative explanations. The Journal of Finance, 56(2), 699-720. doi:http://doi.org/10.2139/ssrn.166840
---
# References

|Johnson, T. C. (2002). Rational momentum effects. The Journal of Finance, 57(2), 585-608.|doi:https://doi.org/10.1111/1540-6261.00435|
|---|---|
|Jostova, G., Nikolova, S., Philipov, A., & Stahel, C. W. (2013). Momentum in corporate bond returns. The Review of Financial Studies, 26(7), 1649-1693.|doi:https://doi.org/10.1093/rfs/hht022|
|Kaunitz, L., Zhong, S., & Kreiner, J. (2017). Beating the bookies with their own numbers-and how the online sports betting market is rigged. arXiv preprint arXiv:1710.02824.| |
|Kirchler, M. (2009). Underreaction to fundamental information and asymmetry in mispricing between bullish and bearish markets. An experimental study. Journal of Economic Dynamics and Control, 33(2), 491-506.|doi:https://doi.org/10.1016/j.jedc.2008.08.002|
|Lesmond, D. A., Schill, M. J., & Zhou, C. (2004). The illusory nature of momentum profits. Journal of Financial Economics, 71(2), 349-380.|doi:https://doi.org/10.1016/S0304-405X(03)00206-X|
|Levitt, S. D. (2004). Why Are Gambling Markets Organised so Differently from Financial Markets? The Economic Journal, 114(495), 223-246.|doi:https://doi.org/10.1111/j.1468-0297.2004.00207.x|
|Lewellen, J. (2002). Momentum and Autocorrelation in Stock Returns. The Review of Financial Studies, 15(2), 533-564.|doi:https://doi.org/10.1093/rfs/15.2.533|
|Li, J. (2018). Explaining momentum and value simultaneously. Management Science, 64(9), 4239-4260.|doi:https://doi.org/10.1287/mnsc.2017.2735|
|Lin, S., & Rassenti, S. (2012). Are under- and over-reaction the same matter? Experimental evidence. Journal of Economic Behavior & Organization, 84(1), 39-61.|doi:https://doi.org/10.1016/j.jebo.2012.07.004|
|Moskowitz, T. J. (2021). Asset Pricing and Sports Betting. The Journal of Finance, 76(6), 3153-3209.|doi:https://doi.org/10.1111/jofi.13082|
|Moskowitz, T. J., Ooi, Y. H., & Pedersen, L. H. (2012). Time series momentum. Journal of Financial Economics, 104(2), 228-250.|doi:https://doi.org/10.1016/j.jfineco.2011.11.003|
|Noussair, C. N., & Tucker, S. (2013). Experimental research on asset pricing. Journal of Economic Surveys, 27(3), 554-569.|doi:https://doi.org/10.1111/joes.12019|
|Page, L., & Siemroth, C. (2021). How Much Information Is Incorporated into Financial Asset Prices? Experimental Evidence. The Review of Financial Studies, 34(9), 4412-4449.|doi:https://doi.org/10.1093/rfs/hhaa143|
|Pankoff, L. D. (1968). Market Efficiency and Football Betting. The Journal of Business, 41(2), 203-214.|doi:http://dx.doi.org/10.1086/295077|
|Patton, A. J., & Weller, B. M. (2020). What you see is not what you get: The costs of trading market anomalies. Journal of Financial Economics, 137(2), 515-549.|doi:https://doi.org/10.1016/j.jfineco.2020.02.012|
|Sauer, R. D. (1998). The Economics of Wagering Markets. Journal of Economic Literature, 36(4), 2021-2064.|doi:https://www.jstor.org/stable/2565046|
|Schnytzer, A., & Shilony, Y. (1995). Inside information in a betting market. The Economic Journal, 105(431), 963-971.| |
|Shank, C. A. (2018). Is the NFL betting market still inefficient? Journal of Economics and Finance, 42(4), 818-827.|doi:https://doi.org/10.1007/s12197-018-9431-4|
|Shin, H. S. (1991). Optimal betting odds against insider traders. The Economic Journal, 101(408), 1179-1185.| |
|Smith, V. L., Suchanek, G. L., & Williams, A. W. (1988). Bubbles, Crashes, and Endogenous Expectations in Experimental Spot Asset Markets. Econometrica, 56(5), 1119-1151.|doi:10.2307/1911361|
|Stevens, D. E., & Williams, A. W. (2004). Inefficiency in earnings forecasts: Experimental evidence of reactions to positive vs. negative information. Experimental Economics, 7(1), 75-92.|doi:http://doi.org/10.2139/ssrn.388420|
---
# References

|Author(s)|Title|Journal|Volume(Issue)|Pages|DOI|
|---|---|---|---|---|---|
|Stöckl, T., Huber, J., & Kirchler, M.|Multi-period experimental asset markets with distinct fundamental value regimes|Experimental Economics|18(2)|314-334|https://doi.org/10.1007/s10683-014-9404-1|
|Thaler, R. H., & Ziemba, W. T.|Anomalies: Parimutuel Betting Markets: Racetracks and Lotteries|Journal of Economic Perspectives|2(2)|161-174|https://doi.org/10.1257/jep.2.2.161|
|Tryfos, P., Casey, S., Cook, S., Leger, G., & Pylypiak, B.|The profitability of wagering on NFL games|Management Science|30(1)|123-132|https://doi.org/10.1287/mnsc.30.1.123|
|Vandenbruaene, J., De Ceuster, M., & Annaert, J.|Efficient spread betting markets: A literature review|Journal of Sports Economics|23(7)|907-949|https://doi.org/10.1177/15270025211071042|
|Vergin, R. C.|Overreaction in the NFL point spread market|Applied Financial Economics|11(5)|497-509|https://doi.org/10.1080/096031001752236780|
|Vergin, R. C., & Scriabin, M.|Winning strategies for wagering on National Football League games|Management Science|24(8)|809-818|https://doi.org/10.1287/mnsc.24.8.809|
|Weber, M., & Welfens, F.|How do markets react to fundamental shocks?: An experimental analysis on underreaction and momentum|Retrieved from Available at SSRN| | |https://ssrn.com/abstract=1022924|
|Woodland, B. M., & Woodland, L. M.|The effects of risk aversion on wagering: point spread versus odds|Journal of Political Economy|99(3)|638-653|https://doi.org/10.10.1086/261770|
|Woodland, B. M., & Woodland, L. M.|Market efficiency and the favorite-longshot bias: the baseball betting market|The Journal of Finance|49(1)|269-279|https://doi.org/10.1111/j.1540-6261.1994.tb04429.x|
---
# Table 1. Descriptive statistics of the data set.

|League|Number of games|Home win %|Draw %|Away win %|Mean goals per match|
|---|---|---|---|---|---|
|Argentina: Primera Division|510|46.86%|28.43%|24.71%|2.32|
|Austria: Tipico Bundesliga|206|47.57%|24.27%|28.16%|2.61|
|Belarus: Vysshaya Liga|274|38.69%|28.10%|33.21%|2.45|
|Belgium: Jupiler League|341|49.85%|24.63%|25.51%|2.88|
|Belgium: Proximus League|294|41.84%|25.85%|32.31%|2.94|
|Brazil: Série A|499|52.51%|24.05%|23.45%|2.45|
|Bulgaria: A PFG|122|46.72%|25.41%|27.87%|2.37|
|Chile: Primera Division|288|44.79%|27.78%|27.43%|2.88|
|China: Super League|273|49.08%|26.01%|24.91%|2.65|
|Colombia: Liga Aguila|523|48.57%|27.53%|23.90%|2.37|
|Croatia: 1. HNL|209|43.06%|27.27%|29.67%|2.23|
|Cyprus: First Division|286|41.96%|26.22%|31.82%|2.69|
|Czech Republic: Synot liga|186|51.61%|22.58%|25.81%|2.76|
|Denmark: Superliga|260|45.38%|25.00%|29.62%|2.76|
|Ecuador: Serie A|311|47.59%|26.05%|26.37%|2.63|
|England: Championship|654|43.43%|28.59%|27.98%|2.46|
|England: League One|661|42.81%|25.26%|31.92%|2.66|
|England: League Two|652|38.50%|26.53%|34.97%|2.67|
|England: Premier League|434|43.32%|27.42%|29.26%|2.75|
|France: Ligue 1|443|45.15%|27.31%|27.54%|2.58|
|France: Ligue 2|451|40.80%|32.59%|26.61%|2.29|
|Germany: 2. Bundesliga|359|43.73%|27.02%|29.25%|2.69|
|Germany: Bundesliga|355|46.48%|23.38%|30.14%|2.81|
|Greece: Super League|287|47.04%|27.53%|25.44%|2.23|
|Israel: Ligat ha'Al|278|38.85%|28.06%|33.09%|2.31|
|Italy: Serie A|457|45.73%|25.60%|28.67%|2.62|
|Italy: Serie B|587|46.51%|29.98%|23.51%|2.40|
|Japan: J-League|373|37.80%|23.86%|38.34%|2.61|
|Kazakhstan: Premier League|229|50.22%|19.65%|30.13%|2.49|
|Mexico: Primera Division|407|44.23%|29.24%|26.54%|2.81|
|Netherlands: Eredivisie|386|43.26%|25.65%|31.09%|2.90|
|Norway: Tippeligaen|299|46.82%|24.75%|28.43%|2.82|
|Paraguay: Primera Division|303|37.29%|23.43%|39.27%|2.97|
|Poland: Ekstraklasa|346|42.20%|28.61%|29.19%|2.64|
|Portugal: Primeira Liga|357|42.58%|24.09%|33.33%|2.66|
|Romania: Liga 1|304|41.78%|28.29%|29.93%|2.52|
|Russia: Premier League|283|45.94%|28.62%|25.44%|2.33|
|Scotland: Premiership|261|40.23%|25.29%|34.48%|2.83|
|Serbia: Super Liga|346|45.95%|26.30%|27.75%|2.38|
|Slovakia: Fortuna liga|236|51.27%|22.03%|26.69%|2.56|
|Slovenia: Prva liga|213|35.21%|27.70%|37.09%|2.43|
|South Korea: K-League Classic|290|38.62%|28.28%|33.10%|2.65|
|Spain: Primera Division|344|48.55%|23.55%|27.91%|2.79|
|Spain: Segunda Division|423|43.74%|31.68%|24.59%|2.21|
|Sweden: Allsvenskan|288|46.53%|22.57%|30.90%|3.10|
|Switzerland: Super League|208|47.12%|25.00%|27.88%|3.24|
|Turkey: Super Lig|351|47.86%|25.64%|26.50%|2.64|
|Ukraine: Pari-Match League|212|40.57%|23.11%|36.32%|2.65|
|Uruguay: Primera Division|291|39.18%|25.77%|35.05%|2.57|
|USA: MLS|430|51.40%|27.91%|20.70%|2.81|
|Sum|17380| | | | |
|Average|347.60|44.53%|26.19%|29.28%|2.62|
---
# Table 2: Summary statistics for all market odds, home win market odds, draw market odds and away win market odds

| |All market odds|Home win market odds|Draw market odds|Away win market odds|
|---|---|---|---|---|
|N|3559957|1186728|1186471|1186758|
|Mean|3.34|2.46|3.58|3.98|
|Median|3.15|2.15|3.34|3.29|
|Standard deviation|1.92|1.39|0.82|2.7|
|Skewness|4.97|4.65|4.91|4.19|
|Kurtosis|49.04|37.4|40.47|30.61|
|Minimum|1.02|1.02|1.60|1.02|
|Maximum|55.94|33.76|18.74|55.94|

# Table 3: Summary statistics for changes in all market odds, home win market odds, draw market odds and away win market odds

| |All market odds|Home win market odds|Draw market odds|Away win market odds|
|---|---|---|---|---|
|N percentage changes|3,507,701|1,169,309|1,169,053|1,169,339|
|Mean percentage changes|0.02%|0.01%|0.01%|0.03%|
|Median percentage changes|0.00%|0.00%|0.00%|0.00%|
|Standard deviation percentage changes|0.96%|0.94%|0.53%|1.27%|
|Skewness percentage changes|9.54|7.76|5.65|8.85|
|Kurtosis percentage changes|998.42|772.83|399.83|739.52|
|Minimum percentage change|-53.57%|-53.57%|-25.85%|-52.00%|
|Maximum percentage change|185.93%|133.08%|55.95%|185.93%|
|N absolute changes|3,507,701|1,169,309|1,169,053|1,169,339|
|Mean absolute changes|0.00|0.00|0.00|0.00|
|Median absolute changes|0.00|0.00|0.00|0.00|
|Standard deviation absolute changes|0.06|0.04|0.02|0.08|
|Skewness absolute changes|6.05|7.02|3.85|4.40|
|Kurtosis absolute changes|1915.86|3657.17|621.90|895.92|
|Minimum absolute change|-8.52|-8.52|-1.86|-8.00|
|Maximum absolute change|8.69|6.27|2.50|8.69|

# Table 4: Overview of the 𝛽' coefficients and t statistics of regression (1)

| |Coefficient|Home|Draw|Away|t-stat|Home|Draw|Away|
|---|---|---|---|---|---|---|---|---|
|b > 0.1|123|72|95|t > 1.96|0|0|0| |
|0 < b < 0.1|58|18|41|-1.96 < t < 1.96|2026|1451|2111| |
|-0.1 < b < 0|259|13|182|-2.5 < t < -1.96|267|594|205| |
|-0.5 < b < -0.1|1551|181|1800|-3 < t < -2.5|120|375|103| |
|-1 < b < -0.5|286|1062|293|-4 < t < -3|67|65|65| |
|b < -1|208|1139|74|t < -4|5|0|1| |
---
# Table 5: Overview of the 𝛽' coefficients and t statistics of regression (4)

|Coefficient|Home|Draw|Away|t-stat|Home|Draw|Away|
|---|---|---|---|---|---|---|---|
|b > 0.1|20|144|61|t > 1.96|0|1|0|
|0 < b < 0.1|4|18|13|-1.96 < t < 1.96|1598|1419|1725|
|-0.1 < b < 0|6|18|7|-2.5 < t < -1.96|575|594|445|
|-0.5 < b < -0.1|55|103|94|-3 < t < -2.5|249|349|185|
|-1 < b < -0.5|223|148|255|-4 < t < -3|63|113|111|
|b < -1|2177|2054|2055|t < -4|0|9|19|

# Table 6: Overview of the ' coefficients and t statistics of regression (1) at the individual bookmaker level

|Coefficient|Home|Draw|Away|t-stat|Home|Draw|Away|
|---|---|---|---|---|---|---|---|
|b > 0.1|27.22%|29.35%|19.88%|t > 1.96|0.65%|1.62%|1.20%|
|0 < b < 0.1|9.47%|4.42%|7.10%|-1.96 < t < 1.96|91.93%|88.35%|85.49%|
|-0.1 < b < 0|11.43%|5.26%|12.18%|-2.5 < t < -1.96|4.07%|6.14%|7.45%|
|-0.5 < b < -0.1|35.7%|22.04%|38.33%|-3 < t < -2.5|1.81%|2.41%|3.38%|
|-1 < b < -0.5|8.67%|17.89%|15.30%|-4 < t < -3|1.18%|1.17%|1.89%|
|b < -1|7.51%|21.04%|7.21%|t < -4|0.37%|0.31%|0.60%|

# Table 7: The columns indicate the percentage of t-statistics < -1.96 of the ' coefficients per bookmaker

|<5%|5% < x < 10%|10% < x < 15%|15% < x < 20%|< 20%|
|---|---|---|---|---|
|Unibet|bet365|Pinnacle Sports|Interwetten|bet-at-home|
|Expekt|888sport|Betway|Bwin|Ladbrokes|
|10Bet|Paddy Power|Tipico|Sportingbet|myBet|
|William Hill|SBOBET|youwin| | |
|DOXXbet|BetVictor| | | |
|Betsafe|12BET| | | |
|Betclic|ComeOn| | | |
|Betsson| | | | |
|Jetbull| | | | |
|Titanbet| | | | |
|Betfair Sports| | | | |
---
# Table 8: Performance of the momentum strategies when bets are made at the best available odds

c is a critical value for the relative change in odds during the time series. For example, c = -5% means betting on all odds that have decreased by at least 5% in the runup to the game. The difference in means is tested via t-tests, the difference in variances is tested via the non-parametric Fligner-Killeen test, the difference in the skewness is tested via a bootstrap setup. The stars indicate whether the results are significant at the 10%, 5%, and 1% level respectively.

# Panel A: HOME ODDS

| | | | | | |c|Number of bets|Mean return|Standard deviation|Skewness|Number of bets|Mean return|Standard deviation|Skewness|Difference in means|p-value means|p-value variances|p-value skewness|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|-5%|6901|4.54%|139.95%|1.93|5%|7573|-3.15%|144.83%|2.00|7.69%|0.12%***|2.60%**|79.40%| | | | | |
|-10%|2877|8.80%|154.98%|2.39|10%|3756|-5.03%|158.36%|2.41|13.83%|0.04%***|0.32%***|94.60%| | | | | |
|-15%|1282|10.03%|174.24%|2.83|15%|2070|-6.54%|173.01%|2.54|16.57%|0.74%***|0.58%***|68.00%| | | | | |
|-20%|645|11.09%|178.23%|2.36|20%|1202|-3.37%|195.44%|3.09|14.46%|10.86%|2.84%**|4.40%| | | | | |

# Panel B: DRAW ODDS

| | | | | | | |c|Number of bets|Mean return|Standard deviation|Skewness|Number of bets|Mean return|Standard deviation|Skewness|Difference in means|p-value means|p-value variances|p-value skewness|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|-5%|2842|-1.97%|181.65%|1.75|5%|4224|-6.42%|182.15%|1.82|4.45%|31.38%|96.53%|73.00%| | | | | | |
|-10%|657|-4.88%|200.63%|2.21|10%|1660|-9.60%|190.10%|1.90|4.72%|60.44%|72.43%|80.00%| | | | | | |
|-15%|226|-0.38%|216.95%|2.08|15%|748|-18.98%|186.74%|2.08|18.60%|24.47%|15.13%|50.60%| | | | | | |
|-20%|82|17.93%|239.01%|1.85|20%|370|-21.51%|188.03%|2.17|39.44%|16.42%|5.75*|41.80%| | | | | | |

# Panel C: AWAY ODDS

| | | | | | |c|Number of bets|Mean return|Standard deviation|Skewness|Number of bets|Mean return|Standard deviation|Skewness|Difference in means|p-value means|p-value variances|p-value skewness|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|-5%|8520|-2.08%|188.79%|2.82|5%|9746|-8.69%|191.83%|3.33|6.61%|1.93%**|0.32%***|35.80%| | | | | |
|-10%|4200|-2.08%|192.60%|2.83|10%|5668|-11.19%|208.80%|4.76|9.11%|2.50%**|0.04%***|28.80%| | | | | |
|-15%|2137|-0.45%|201.62%|2.74|15%|3548|-10.11%|233.31%|5.31|9.66%|9.93%*|0.06%***|7.80%*| | | | | |
|-20%|1093|2.70%|204.44%|2.37|20%|2413|-11.38%|222.65%|3.16|14.08%|6.64%*|0.15%***|0.00%*| | | | | |

# Table 9: Performance of the momentum strategies when bets are made at the 4th highest odds

c is a critical value for the relative change in odds during the time series. For example, c = -5% means betting on all odds that have decreased by at least 5% in the runup to the game. The difference in means is tested via t-tests, the difference in variances is tested via the non-parametric Fligner-Killeen test, the difference in the skewness is tested via a bootstrap setup. The stars indicate whether the results are significant at the 10%, 5%, and 1% level respectively.
---
|Panel A: HOME ODDS| | | | | | | | | | |
|---|---|---|---|---|---|---|---|---|---|---|
|Number of bets|Mean return|Standard deviation|Skewness|Number of bets|Mean return|Standard deviation|Skewness|Difference in means|p-value|p-value|
|-5%|6732|-0.03%|131.70%|1.76|5%|7396|-6.78%|136.63%|1.80|6.75%|
|-10%|2807|1.97%|142.03%|2.13|10%|3675|-9.37%|147.37%|2.23|11.34%|
|-15%|1243|0.04%|154.71%|2.64|15%|2026|-12.25%|157.72%|2.16|12.29%|
|-20%|625|-2.90%|151.75%|2.03|20%|1174|-10.63%|175.27%|2.77|7.73%|

|Panel B: DRAW ODDS| | | | | | | | | | |
|---|---|---|---|---|---|---|---|---|---|---|
|Number of bets|Mean return|Standard deviation|Skewness|Number of bets|Mean return|Standard deviation|Skewness|Difference in means|p-value|p-value|
|-5%|2741|-6.57%|172.11%|1.64|5%|4061|-10.99%|173.09%|1.77|4.42%|
|-10%|644|-11.27%|185.99%|2.06|10%|1609|-15.13%|179.43%|1.89|3.86%|
|-15%|216|-12.95%|194.49%|2.07|15%|723|-23.59%|174.73%|2.04|10.64%|
|-20%|76|-7.37%|201.88%|1.94|20%|359|-24.73%|178.43%|2.11|17.36%|

|Panel C: AWAY ODDS| | | | | | | | | | |
|---|---|---|---|---|---|---|---|---|---|---|
|Number of bets|Mean return|Standard deviation|Skewness|Number of bets|Mean return|Standard deviation|Skewness|Difference in means|p-value|p-value|
|-5%|8237|-7.22%|175.23%|2.63|5%|9472|-14.01%|177.41%|3.25|6.79%|
|-10%|4086|-8.29%|176.91%|2.67|10%|5543|-17.06%|189.15%|4.09|8.77%|
|-15%|2085|-7.91%|183.40%|2.56|15%|3472|-16.61%|210.17%|4.92|8.70%|
|-20%|1064|-5.69%|185.13%|2.31|20%|2354|-17.87%|201.00%|2.94|12.18%|

Table 10: Performance of the momentum strategies when bets are made at median odds. c is a critical value for the relative change in odds during the time series. For example, c = -5% means betting on all odds that have decreased by at least 5% in the runup to the game. The difference in means is tested via t-tests, the difference in variances is tested via the non-parametric Fligner-Killeen test, the difference in the skewness is tested via a bootstrap setup. The stars indicate whether the results are significant at the 10%, 5% and 1% level respectively.
---
# Table 11: Performance of the momentum strategies applied to the time series of odds of individual bookmakers

For example, c = -5% means betting on all odds that have decreased by at least 5% in the runup to the game. The difference in means is tested via t-tests, the difference in variances is tested via the non-parametric Fligner-Killeen test, the difference in the skewness is tested via a bootstrap setup. The stars indicate whether the results are significant at the 10%, 5% and 1% level respectively.

# Panel A: HOME ODDS

|c|Number of bets|Mean return|Standard deviation|Skewness|Number of bets|Mean return|Standard deviation|Skewness|Difference in means|p-value means|p-value variances|p-value skewness|
|---|---|---|---|---|---|---|---|---|---|---|---|---|
|-5%|160487|-6.17%|124.20%|1.72|5%|171066|-7.70%|133.33%|1.76|1.53%|0.06%***|0.01%***|
|-10%|64638|-7.25%|131.88%|2.05|10%|83604|-9.56%|146.98%|2.11|2.31%|0.15%***|74.19%|
|-15%|27294|-9.25%|142.48%|2.43|15%|43373|-11.48%|158.52%|2.37|2.23%|5.26%*|2.99%**|
|-20%|11931|-13.24%|150.20%|2.77|20%|23769|-11.42%|172.34%|2.66|-1.82%|30.54%|30.15%|

# Panel B: DRAW ODDS

|c|Number of bets|Mean return|Standard deviation|Skewness|Number of bets|Mean return|Standard deviation|Skewness|Difference in means|p-value means|p-value variances|p-value skewness|
|---|---|---|---|---|---|---|---|---|---|---|---|---|
|-5%|91024|-9.59%|160.06%|1.46|5%|114674|-10.68%|166.52%|1.55|1.09%|13.18%|0%***|
|-10%|19571|-13.97%|169.96%|1.87|10%|38809|-14.16%|177.94%|1.89|0.19%|90.48%|7.3%*|
|-15%|6289|-14.48%|180.97%|2.12|15%|16552|-16.42%|188.33%|2.17|1.94%|47.58%|58.66%|
|-20%|2157|-13.05%|191.75%|2.28|20%|7319|-18.22%|200.61%|2.48|5.17%|27.64%|8.49%*|

# Panel C: AWAY ODDS

|c|Number of bets|Mean return|Standard deviation|Skewness|Number of bets|Mean return|Standard deviation|Skewness|Difference in means|p-value means|p-value variances|p-value skewness|
|---|---|---|---|---|---|---|---|---|---|---|---|---|
|-5%|200146|-13.40%|162.94%|2.65|5%|221185|-15.56%|169.36%|2.77|2.16%|0%***|0%***|
|-10%|97698|-15.54%|168.68%|3.08|10%|133291|-17.38%|181.44%|3.11|1.84%|1.17%**|0%***|
|-15%|49888|-16.97%|176.34%|3.24|15%|82901|-19.85%|192.47%|3.45|2.88%|0.54%***|0%***|
|-20%|24039|-18.44%|179.72%|3.30|20%|52673|-20.44%|204.77%|3.72|2.00%|17.07%|0%***|

# Table 12: Overview of the 𝛽' coefficients and t statistics of regression (1)

The table shows the number of regressions with coefficients and t-stats in the respective range.

| |Coefficient|Home|Draw|Away|t-stat|Home|Draw|Away|
|---|---|---|---|---|---|---|---|---|
|b > 0.1|123|72|95|t > 1.96|1|0|0| |
|0 < b < 0.1|58|18|41|-1.96 < t < 1.96|2041|1265|2042| |
|-0.1 < b < 0|259|13|182|-2.5 < t < -1.96|270|494|249| |
|-0.5 < b < -0.1|1551|181|1800|-3 < t < -2.5|125|377|111| |
|-1 < b < -0.5|286|1062|293|-4 < t < -3|47|337|75| |
|b < -1|208|1139|74|t < -4|1|12|8| |

# Table 13: Overview of the ' coefficients and t statistics of regression (1)

The table shows the number of regressions with coefficients and t-stats in the respective range.
---
**Table 14: Performance of the momentum strategies applied to the time series of odds of individual bookmakers with a lag of 2 hours between the end of the information window and the execution of the bet.**
|Coefficient|Home|Draw|Away|t-stat|Home|Draw|Away|
|---|---|---|---|---|---|---|---|
|b > 0.1|133|71|100|t > 1.96|1|0|0|
|0 < b < 0.1|51|21|44|-1.96 < t < 1.96|2022|1249|2012|
|-0.1 < b < 0|241|12|194|-2.5 < t < -1.96|245|463|225|
|-0.5 < b < -0.1|1519|179|1733|-3 < t < -2.5|113|378|105|
|-1 < b < -0.5|275|1026|276|-4 < t < -3|33|315|67|
|b < -1|198|1106|68|t < -4|1|10|6|

Panel A: HOME ODDS

|c|Number of bets|Mean return|Standard deviation|Skewness|Number of bets|Mean return|Standard deviation|Skewness|Difference in means|p-value means|p-value variances|p-value skewness| |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|-5%|147623|-6.27%|124.60%| |1.76 5%|157365|-7.71%|134.35%| |1.76 1.44%|0.22%***|0.00%***|51.00%|
|-10%|56385|-7.36%|132.96%| |2.11 10%|73957|-9.93%|148.58%| |2.14 2.57%|0.10%***|54.08%|61.40%|
|-15%|23520|-9.83%|143.50%| |2.46 15%|37525|-12.65%|159.80%| |2.39 2.82%|2.43%**|0.26%***|31.30%|
|-20%|10202|-14.66%|149.94%| |2.82 20%|20445|-12.71%|173.21%| |2.67 -1.95%|30.80%|22.58%|22.80%|

Panel B: DRAW ODDS

|c|Number of bets|Mean return|Standard deviation|Skewness|Number of bets|Mean return|Standard deviation|Skewness|Difference in means|p-value means|p-value variances|p-value skewness| |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|-5%|82458|-9.89%|160.52%| |1.49 5%|106946|-10.51%|166.81%| |1.55 0.62%|41.36%|0.00%***|99.40%|
|-10%|17179|-13.44%|171.71%| |1.89 10%|34765|-14.42%|178.05%| |1.91 0.98%|54.72%|29.59%|65.10%|
|-15%|5441|-14.64%|183.58%| |2.18 15%|14360|-16.56%|188.53%| |2.20 1.92%|51.35%|52.57%|59.40%|
|-20%|1851|-8.97%|197.56%| |2.25 20%|6132|-17.51%|203.53%| |2.52 8.54%|10.58%|2.06%**|96.90%|

Panel C: AWAY ODDS

|c|Number of bets|Mean return|Standard deviation|Skewness|Number of bets|Mean return|Standard deviation|Skewness|Difference in means|p-value means|p-value variances|p-value skewness| |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|-5%|185759|-13.56%|163.85%| |2.75 5%|208905|-15.92%|169.95%| |2.78 2.36%|0.00%***|0.00%***|54.90%|
|-10%|86140|-15.04%|171.70%| |3.27 10%|122038|-17.54%|182.89%| |3.15 2.50%|0.14%***|0.00%***|30.70%|
|-15%|43093|-16.44%|179.73%| |3.34 15%|74549|-20.09%|194.07%| |3.47 3.65%|0.11%***|0.00%***|73.60%|
|-20%|20642|-18.58%|181.96%| |3.39 20%|46824|-20.22%|206.79%| |3.70 1.64%|30.40%|0.00%***|86.70%|

Table 15: Performance of the momentum strategies applied to the time series of odds of individual bookmakers with a lag of 3 hours between the end of the information window and the execution of the bet.
---
# Panel A: HOME ODDS

|Number of bets|Mean return|Standard deviation|Skewness|Number of bets|Mean return|Standard deviation|Skewness|Difference in means|p-value means|p-value variances|p-value skewness| | |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|-5%|139046|-6.07%|124.94%|1.73|5%|147873|-7.52%|135.12%|1.78|1.45%|0.29%***|0.02%***|74.20%|
|-10%|51568|-6.91%|133.38%|2.08|10%|67574|-10.09%|149.85%|2.25|3.18%|0.01%***|10.39%|93.10%|
|-15%|21161|-1.00%|142.72%|2.37|15%|33818|-12.08%|161.30%|2.43|11.08%|12.31%|1.49%**|67.40%|
|-20%|8992|-1.55%|146.96%|2.57|20%|18208|-12.08%|174.76%|2.82|10.53%|8.77%*|62.19%|90.00%|

# Panel B: DRAW ODDS

|Number of bets|Mean return|Standard deviation|Skewness|Number of bets|Mean return|Standard deviation|Skewness|Difference in means|p-value means|p-value variances|p-value skewness| | |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|-5%|77046|-9.91%|160.91%|1.51|5%|100651|-10.30%|167.17%|1.56|0.39%|61.22%|0.00%***|98.50%|
|-10%|15654|-13.12%|172.73%|1.91|10%|31589|-14.02%|178.97%|1.93|0.90%|60.03%|33.93%|64.20%|
|-15%|4928|-15.57%|183.52%|2.22|15%|12692|-16.94%|188.92%|2.25|1.37%|65.99%|65.02%|61.40%|
|-20%|1662|-8.09%|200.69%|2.27|20%|5288|-17.45%|204.77%|2.59|9.36%|9.91%*|2.19%**|97.50%|

# Panel C: AWAY ODDS

|Number of bets|Mean return|Standard deviation|Skewness|Number of bets|Mean return|Standard deviation|Skewness|Difference in means|p-value means|p-value variances|p-value skewness| | |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|-5%|175312|-13.75%|164.51%|2.83|5%|200255|-16.19%|170.53%|2.82|2.44%|0.00%***|0.00%***|44.10%|
|-10%|79087|-14.97%|173.35%|3.41|10%|114476|-17.74%|184.16%|3.21|2.77%|0.07%***|0.00%***|21.60%|
|-15%|39061|-16.85%|181.56%|3.48|15%|68956|-20.23%|195.14%|3.48|3.38%|0.43%***|0.00%***|51.30%|
|-20%|18494|-19.45%|183.49%|3.60|20%|42903|-20.11%|208.42%|3.79|0.66%|69.95%|0.00%***|75.20%|

Liverpool vs. Manchester City (2/3/2016)

| |1|2.9| | | | | | |
|---|---|---|---|---|---|---|---|---|
| | | | |2.8| | | | |
| |2.7| | | | | | | |
| |{|2.52|2.6| | | | | |
| | | | |2.4| | | | |
| | |2.3| | | | | | |

[-72 t-60 t-48 t-36 [-24 t-12

Figure 1. Liverpool – Manchester city (2/3/2016), hourly pre-game home win odds as quoted by bookmaker Pinnacle.
---
# Home odds relative changes

| |Min %|Max %|
|---|---|---|
|10093|471.78|221.36|
|20092|43.14|76.67|
|2570|25.88|35.64|
|5093|100.93|200.93|
|7583|359.64|248.74|

# Draw odds relative changes

| |Min %|Max %|
|---|---|---|
|10093|43.14|76.67|
|20093|25.88|35.64|
|5093|100.93|200.93|
|7583|359.64|248.74|

# Away odds relative changes

| |Min %|Max %|
|---|---|---|
|10093|359.64|248.74|
|20093|43.14|76.67|

# Home odds absolute changes

| |+-72 to +-1|Max|
|---|---|---|
|4000|5.81|13.43|
|2000|3.07|4.70|
|1000|-1.43|22.56|

# Draw odds absolute changes

| |+-72 to +-1|Max|
|---|---|---|
|6000|3.00| |
|4000|2.00| |
|2000|1.00| |

# Away odds absolute changes

| |+-72 to +-1|Max|
|---|---|---|
|2000| | |
|1000| | |

# Figure 2: Histograms of the percentage changes in market odds from t-72 to t-1 per outcome category (home win, draw, away win) are shown in panels A to C while histograms of absolute changes are shown in panels D to F.

# Figure 3: Average of the absolute value of the percentage changes in away market odds per hour.
---
# PANEL A

Decreasing odds (increasing outcome probability)061 : UnderreactionEfficient0bz Overreaction

# PANEL B

Increasing odds (decreasing outcome probability)Obl = OverreactionOp : Efficient061 Underreaction

(-72 (-24

Figure 4: Efficient (𝑜*), under- (𝑜*%) and overreaction (𝑜*+) to news at t-24 movement decrease increase all observations

| |home|draw|away| |
|---|---|---|---|---|
|8| | |4.9|12.8|
|-15| | | | |

Figure 5: Mean returns for every t leading up to the game. Mean returns per hour for all observations in blue, mean returns for the observations of which the odds decreased between t-2 and t-1 in red and the mean returns for the observations of which the odds increased between t-2 and t-1 in green. The black dots are the group means and the black bars the 99% confidence intervals.