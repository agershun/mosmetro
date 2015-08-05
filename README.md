# Moscow Metro Graph Analysis

This repository dedicated to the analysis of the graph of Moscow metro 
(as the homework for Coursera [data visualization course](https://class.coursera.org/datavisualization-001/wiki/Programming_Assignment_2_Rubric))


## The problem

Moscow metro net is very complex, it includes 12 lines with 196 stations and 237 kilometers of undeground rails. 
I decided to analyze what is the 'backbone' of this graph and is this graph can be divided into communities (see 
[this lecture](https://class.coursera.org/datavisualization-001/lecture/77) about graph visualization)?

## Approach Description

The work divided into three parts:
* data preparation 
* graph analysis
* results visualization

## 1.Data preparation

All data will be loaded abd parsed from Wiki page with the [list of Moscow Metro stations](https://en.wikipedia.org/wiki/List_of_Moscow_Metro_stations)

The page is loaded in HTML format and then to be parsed to JavaScript array of stations with attributes:
* Station name (in English)
* Metro line
* Geo coordinates (we will use them for visualisation)
* Transfer information (array of transfer stations)
* some other attributes for future experiments (date of openning, elevation, type)

Then I created the list of edged based on the information from lines (link two neighborough stations with the edge)
and also added edges for transfer stations.

The data to be stored into JSON array with nodes and edges (for easy future analysis and visualization).


